import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapagePageRoutingModule } from './mapage-routing.module';

import { MapagePage } from './mapage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapagePageRoutingModule
  ],
  declarations: [MapagePage]
})
export class MapagePageModule {}
