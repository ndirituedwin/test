import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'my-component',
    loadChildren: () => import('./mycomponent/mycomponent.module').then( m => m.MycomponentPageModule)
  },
  {
    path: '',
    redirectTo: 'my-component',
    pathMatch: 'full'
  },
  {
    path: 'mycomponent',
    loadChildren: () => import('./mycomponent/mycomponent.module').then( m => m.MycomponentPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
