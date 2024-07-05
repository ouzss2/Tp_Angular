import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDataComponent } from './add-data/add-data.component';
import { DisplayDataComponent } from './display-data/display-data.component';

const routes: Routes = [
  { path: 'add', component: AddDataComponent },
  { path: 'display', component: DisplayDataComponent },
  { path: '', redirectTo: '/add', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
