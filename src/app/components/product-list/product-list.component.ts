import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {combineLatest, map, Observable, of, startWith} from "rxjs";
import {ProductModel} from "../../models/product.model";
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-list',
  styleUrls: ['./product-list.component.scss'],
  templateUrl: './product-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  readonly sortProducts$: Observable<string[]> = of(['asc', 'desc']);
  readonly getAll$: Observable<ProductModel[]> = this._productService.getAll();
  readonly sortForm: FormGroup = new FormGroup({
    order: new FormControl('')
  })

  readonly sortedList$: Observable<ProductModel[]> = combineLatest([
    this.getAll$,
    this.sortForm.valueChanges.pipe(startWith({ order: '' }))
  ]).pipe(
    map(([products, form]) => {
      if(!!form.order){
        return products.sort((a, b) => {
          if (a.title > b.title) {
            return form.order === 'asc' ? 1 : -1;
          }
          if (a.title < b.title) {
            return form.order === 'asc' ? -1 : 1
          }
          return 0;
        })
      }else {
        return [];
      }
    })
  )

  constructor(private _productService: ProductService) {
  }

}
