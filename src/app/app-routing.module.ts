import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes:Routes = [
 {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
 },
{
  path: 'add-user-component',
  loadChildren: () => import('./user-module/user-module-routing.module').then(m => m.UserModuleRoutingModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
