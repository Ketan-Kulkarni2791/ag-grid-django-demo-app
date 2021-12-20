import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridInfoComponent } from './grid-info/grid-info.component';

const routes: Routes = [
  {path:'info', component:GridInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
