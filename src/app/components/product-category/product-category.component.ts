import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, combineLatest, map, startWith } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-category',
  styleUrls: ['./product-category.component.scss'],
  templateUrl: './product-category.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCategoryComponent {

  readonly form: FormGroup = new FormGroup({
    categories: new FormControl('')
  })
  readonly categories$: Observable<string[]> = this._productService.getCategories();

  readonly productsList$: Observable<ProductModel[]> = combineLatest([
    this._productService.getAll(),
    this.form.valueChanges.pipe(startWith({ categories: '' })),
  ]).pipe(
    map(([products, form]) =>
      !!form.categories ? products.filter((product) => product.category === form.categories) : []
    )
  )

  constructor(private _productService: ProductService) {
  }
}
