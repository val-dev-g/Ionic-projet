import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CoursPageRoutingModule } from './cours-routing.module';
import { CoursPage } from './cours.page';
import { SaisieComponent } from '../pages/cours/saisie/saisie.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursPageRoutingModule,
  ],
  declarations: [CoursPage, SaisieComponent]
})
export class CoursPageModule {}
