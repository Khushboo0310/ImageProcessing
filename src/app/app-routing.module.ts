import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowPluginComponent } from './show-plugin/show-plugin.component';
import { GraphComponent } from "./graph/graph.component";


const routes: Routes = [
  {
    path: 'showplugins',
    component: ShowPluginComponent
  },
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: 'graph',component: GraphComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
