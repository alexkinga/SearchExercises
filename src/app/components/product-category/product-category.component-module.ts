import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ProductCategoryComponent } from './product-category.component';
import {MatListModule} from "@angular/material/list";

@NgModule({
  imports: [MatCardModule, MatFormFieldModule, MatRadioModule, ReactiveFormsModule, CommonModule, MatCheckboxModule, MatInputModule, MatButtonModule, MatListModule],
  declarations: [ProductCategoryComponent],
  providers: [],
  exports: [ProductCategoryComponent]
})
export class ProductCategoryComponentModule {
}
