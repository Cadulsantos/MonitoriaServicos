import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatChipsModule, MatChipInputEvent } from "@angular/material/chips";
import { MatNativeDateModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  imports: [
     CommonModule,
     MatButtonModule,
     MatToolbarModule,
     MatIconModule,
     MatSidenavModule,
     MatBadgeModule,
     MatListModule,
     MatGridListModule,
     MatFormFieldModule,
     MatInputModule,
     MatSelectModule,
     MatRadioModule,
     MatDatepickerModule,
     MatNativeDateModule,
     MatChipsModule,
     MatTooltipModule,
     MatTableModule,
     MatPaginatorModule,
     MatAutocompleteModule,
    //  MatChipInputEvent
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatBadgeModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    // MatChipInputEvent
  ],
  providers: [
     MatDatepickerModule,
  ]
})
export class CustomMaterialModule { }
