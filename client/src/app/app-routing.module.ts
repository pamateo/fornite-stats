import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';


const routes: Routes = [
  {
   path:'home',
   redirectTo:'home'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [
    RouterModule,
    PagesRoutingModule
   
  ]
})
export class AppRoutingModule { }
