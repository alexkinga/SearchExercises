import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductListComponent} from './components/product-list/product-list.component';
import {MultiJobsComponent} from './components/multi-jobs/multi-jobs.component';
import {ProductListComponentModule} from './components/product-list/product-list.component-module';
import {ProductServiceModule} from './services/product.service-module';
import {MultiJobsComponentModule} from './components/multi-jobs/multi-jobs.component-module';
import {MultiJobsServiceModule} from './services/multi-jobs.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{path: 'product-list', component: ProductListComponent}, {
    path: 'jobs-list',
    component: MultiJobsComponent
  }]), ProductListComponentModule, ProductServiceModule, MultiJobsComponentModule, MultiJobsServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
