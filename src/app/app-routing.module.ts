import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TableComponent} from "./table/table.component";
import {ResultComponent} from "./result/result.component";
import {AdminHomeComponent} from "./admin/admin-home/admin-home.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {HomeComponent} from "./content/home/home.component";
import {NewMatchComponent} from "./admin/new-match/new-match.component";
import {NewLeagueComponent} from "./admin/new-league/new-league.component";

const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "table", component: TableComponent, data: {title: 'Table'}},
    {path: "result", component: ResultComponent},
    {path: "admin/home", component: AdminHomeComponent},
    {path: "admin/newMatch", component: NewMatchComponent},
    {path: "admin/newLeague", component: NewLeagueComponent},
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
