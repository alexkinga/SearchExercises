import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MultiUsersComponent } from './multi-users.component';

@NgModule({
  imports: [MatCardModule, MatFormFieldModule, MatSelectModule, ReactiveFormsModule, MatOptionModule, CommonModule, MatRadioModule, MatListModule, MatTableModule],
  declarations: [MultiUsersComponent],
  providers: [],
  exports: [MultiUsersComponent]
})
export class MultiUsersComponentModule {
}
