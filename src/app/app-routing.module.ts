import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductListComponent} from './components/product-list/product-list.component';
import {MultiJobsComponent} from './components/multi-jobs/multi-jobs.component';
import {ProductCategoryComponent} from './components/product-category/product-category.component';
import {ProductListComponentModule} from './components/product-list/product-list.component-module';
import {ProductServiceModule} from './services/product.service-module';
import {MultiJobsComponentModule} from './components/multi-jobs/multi-jobs.component-module';
import {MultiJobsServiceModule} from './services/multi-jobs.service-module';
import {ProductCategoryComponentModule} from './components/product-category/product-category.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{path: 'product-list', component: ProductListComponent}, {
    path: 'jobs-list',
    component: MultiJobsComponent
  }, {
    path: 'product-category',
    component: ProductCategoryComponent
  }]), ProductListComponentModule, ProductServiceModule, MultiJobsComponentModule, MultiJobsServiceModule, ProductCategoryComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
