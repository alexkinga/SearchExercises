import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatListModule} from "@angular/material/list";

@NgModule({
  imports: [
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    AsyncPipe,
    NgForOf,
    MatListModule
  ],
  declarations: [ProductListComponent],
  providers: [],
  exports: [ProductListComponent]
})
export class ProductListComponentModule {
}
