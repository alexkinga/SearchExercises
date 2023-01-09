import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MultiJobsComponent } from './components/multi-jobs/multi-jobs.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { MultiUsersComponent } from './components/multi-users/multi-users.component';
import { AutocompleteMultiCarsComponent } from './components/autocomplete-multi-cars/autocomplete-multi-cars.component';
import { CryptoChipsComponent } from './components/crypto-chips/crypto-chips.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { MultiJobsComponentModule } from './components/multi-jobs/multi-jobs.component-module';
import { MultiJobsServiceModule } from './services/multi-jobs.service-module';
import { ProductCategoryComponentModule } from './components/product-category/product-category.component-module';
import { MultiUsersComponentModule } from './components/multi-users/multi-users.component-module';
import { UserServiceModule } from './services/user.service-module';
import { AutocompleteMultiCarsComponentModule } from './components/autocomplete-multi-cars/autocomplete-multi-cars.component-module';
import { CarServiceModule } from './services/car.service-module';
import { CryptoChipsComponentModule } from './components/crypto-chips/crypto-chips.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'product-list', component: ProductListComponent }, { path: 'jobs-list', component: MultiJobsComponent }, { path: 'product-category', component: ProductCategoryComponent }, { path: 'multi-users', component: MultiUsersComponent }, { path: 'multi-cars', component: AutocompleteMultiCarsComponent }, { path: 'crypto-list', component: CryptoChipsComponent }]), ProductListComponentModule, ProductServiceModule, MultiJobsComponentModule, MultiJobsServiceModule, ProductCategoryComponentModule, MultiUsersComponentModule, UserServiceModule, AutocompleteMultiCarsComponentModule, CarServiceModule, CryptoChipsComponentModule, CryptoServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
