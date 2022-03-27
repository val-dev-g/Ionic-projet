import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SaisiecoursPageRoutingModule } from './saisiecours-routing.module';
import { SaisiecoursPage } from './saisiecours.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaisiecoursPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SaisiecoursPage]
})
export class SaisiecoursPageModule {}
