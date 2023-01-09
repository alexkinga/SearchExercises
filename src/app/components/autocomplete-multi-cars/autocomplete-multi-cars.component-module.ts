import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatOptionModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { AutocompleteMultiCarsComponent } from './autocomplete-multi-cars.component';

@NgModule({
  imports: [MatCardModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule, MatButtonToggleModule, MatAutocompleteModule, MatOptionModule, MatTableModule],
  declarations: [AutocompleteMultiCarsComponent],
  providers: [],
  exports: [AutocompleteMultiCarsComponent]
})
export class AutocompleteMultiCarsComponentModule {
}
