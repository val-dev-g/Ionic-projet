import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full'
  },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then( m => m.CoursesPageModule)
  },
  {
    path: 'mapage',
    loadChildren: () => import('./mapage/mapage.module').then( m => m.MapagePageModule)
  },
  {
    path: 'saisiecours',
    loadChildren: () => import('./saisiecours/saisiecours.module').then( m => m.SaisiecoursPageModule)
  },
  {
    path: 'cours',
    loadChildren: () => import('./cours/cours.module').then( m => m.CoursPageModule)
  },
  {
    path: 'saisiecours',
    loadChildren: () => import('./pages/saisiecours/saisiecours.module').then( m => m.SaisiecoursPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
