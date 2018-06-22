import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPageComponent } from './search-page/search-page.component';
import { ResultPageComponent } from './result-page/result-page.component';

const routes: Routes = [
  {path: "search", component: SearchPageComponent},
  {path: "result/:id", component: ResultPageComponent},
  {path: "", redirectTo: "/search", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
