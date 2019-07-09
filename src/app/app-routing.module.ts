import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowPluginComponent } from './show-plugin/show-plugin.component';


const routes: Routes = [
  {
    path: 'showplugins',
    component: ShowPluginComponent
  },
  { path: '',   redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
