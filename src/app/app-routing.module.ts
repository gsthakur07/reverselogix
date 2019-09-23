import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchpageComponent } from './searchpage/searchpage.component';


const routes: Routes = [
  { path: "", component: SearchpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
