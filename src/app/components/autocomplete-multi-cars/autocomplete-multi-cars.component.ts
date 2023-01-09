import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable, combineLatest, map, shareReplay, startWith} from 'rxjs';
import {BrandModel} from '../../models/brand.model';
import {ComfortFeaturesModel} from '../../models/comfort-features.model';
import {SecurityFeaturesModel} from '../../models/security-features.model';
import {CarService} from '../../services/car.service';

@Component({
  selector: 'app-autocomplete-multi-cars',
  styleUrls: ['./autocomplete-multi-cars.component.scss'],
  templateUrl: './autocomplete-multi-cars.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutocompleteMultiCarsComponent {

  readonly searchForm: FormGroup = new FormGroup({
    brand: new FormControl(''),
    securityFeature: new FormControl(''),
    comfortFeature: new FormControl('')
  });
  readonly searchFormValues$ = this.searchForm.valueChanges.pipe(
    startWith({
      brand: '',
      securityFeature: '',
      comfortFeature: '',
    }),
    shareReplay(1),
  )
  readonly brands$: Observable<BrandModel[]> = this._carService.getBrands();
  readonly securityFeatures$: Observable<SecurityFeaturesModel[]> = this._carService.getSecurityFeatures();
  readonly comfortFeatures$: Observable<ComfortFeaturesModel[]> = this._carService.getComfortFeatures();
  readonly filteredBrands$: Observable<BrandModel[]> = combineLatest([
    this.searchFormValues$,
    this._carService.getBrands(),
  ]).pipe(
    map(([searchForm, carBrands]) =>
      carBrands.filter((brand) =>
        brand.name.toLowerCase().includes(searchForm.brand ? searchForm.brand.toLowerCase() : '')
      )
    )
  );

  readonly filteredSecurityFeatures$: Observable<SecurityFeaturesModel[]> = combineLatest([
    this.searchFormValues$,
    this._carService.getSecurityFeatures(),
  ]).pipe(
    map(([searchForm, securityFeatures]) =>
      securityFeatures.filter((securityFeature) =>
        securityFeature.name.toLowerCase().includes(searchForm.securityFeature ? searchForm.securityFeature.toLowerCase() : '')
      )
    )
  );

  readonly filteredComfortFeatures$: Observable<ComfortFeaturesModel[]> = combineLatest([
    this.searchFormValues$,
    this._carService.getComfortFeatures(),
  ]).pipe(
    map(([searchForm, comfortFeatures]) =>
      comfortFeatures.filter((comfortFeature) =>
        comfortFeature.name.toLowerCase().includes(searchForm.comfortFeature ? searchForm.comfortFeature.toLowerCase() : '')
      )
    )
  );
  readonly cars$: Observable<{
    brand: string;
    model: string;
    comfortFeatures: string[];
    securityFeatures: string[];
  }[]> = combineLatest([
    this._carService.getAllCars(),
    this.brands$,
    this.securityFeatures$,
    this.comfortFeatures$,
    this.searchFormValues$,
  ]).pipe(
    map(([cars, brands, securityFeatures, comfortFeatures, searchForm]) => {
      const brandMap = brands.reduce((acc, curr) => {
        return {...acc, [curr.id]: curr};
      }, {}) as Record<string, BrandModel>;

      const securityMap = securityFeatures.reduce((acc, curr) => {
        return {...acc, [curr.id]: curr};
      }, {}) as Record<string, SecurityFeaturesModel>;

      const comfortMap = comfortFeatures.reduce((acc, curr) => {
        return {...acc, [curr.id]: curr};
      }, {}) as Record<string, ComfortFeaturesModel>;

      return cars
        .filter(car =>
          (!searchForm.brand ||
            searchForm?.brand.trim().length === 0 ||
            brandMap[car.brandId]?.name === searchForm.brand) &&
          (!searchForm.securityFeature ||
            searchForm?.securityFeature.trim().length === 0 ||
            car.securityFeatureIds.map(sf =>
              securityMap[sf]?.name).includes(searchForm.securityFeature)) &&
          (!searchForm.comfortFeature ||
            searchForm?.comfortFeature.trim().length === 0 ||
            car.comfortFeatureIds.map(cf =>
              comfortMap[cf]?.name).includes(searchForm.comfortFeature))
        )
        .map(car => {
          return {
            brand: brandMap[car.brandId]?.name,
            model: car.model,
            comfortFeatures: (car.comfortFeatureIds ?? []).map(
              (cf) => comfortMap[cf]?.name
            ),
            securityFeatures: (car.securityFeatureIds ?? []).map(
              (sf) => securityMap[sf]?.name
            )
          }
        })
    })
  )
  constructor(private _carService: CarService) {
  }

}
