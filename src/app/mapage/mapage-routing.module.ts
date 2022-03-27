import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapagePage } from './mapage.page';

const routes: Routes = [
  {
    path: '',
    component: MapagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapagePageRoutingModule {}
