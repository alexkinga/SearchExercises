import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MultiJobsComponent } from './multi-jobs.component';
import {AsyncPipe, NgForOf} from "@angular/common";


@NgModule({
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    NgForOf,
    AsyncPipe,
    ReactiveFormsModule,
    MatOptionModule,
    CommonModule,
    MatListModule
  ],
  declarations: [MultiJobsComponent],
  providers: [],
  exports: [MultiJobsComponent]
})
export class MultiJobsComponentModule {
}
