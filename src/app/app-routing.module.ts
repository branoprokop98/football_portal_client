import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TableComponent} from "./table/table.component";
import {ResultComponent} from "./result/result.component";

const routes: Routes = [
    {path: "table", component: TableComponent, data: {title: 'Table'}},
    {path: "result", component: ResultComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
