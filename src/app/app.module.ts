import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatExpansionModule} from "@angular/material/expansion";
import { TableComponent } from './table/table.component';
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatGridListModule} from "@angular/material/grid-list";
import { ResultComponent } from './result/result.component';
import {MatCardModule} from "@angular/material/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LeagueSelectionComponent } from './league-selection/league-selection.component';
import {HttpClientModule} from "@angular/common/http";
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { UserMenuComponent } from './menu/user-menu/user-menu.component';
import { AdminMenuComponent } from './menu/admin-menu/admin-menu.component';
import { LoginComponent } from './auth/login/login.component';
import { MatInputModule } from "@angular/material/input";
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './content/home/home.component';
import { NewMatchComponent } from './admin/new-match/new-match.component';
import { NewLeagueComponent } from './admin/new-league/new-league.component';
import {MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ResultComponent,
    LeagueSelectionComponent,
    AdminHomeComponent,
    UserMenuComponent,
    AdminMenuComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NewMatchComponent,
    NewLeagueComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        MatExpansionModule,
        MatSelectModule,
        MatOptionModule,
        MatTableModule,
        MatSortModule,
        MatGridListModule,
        MatCardModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatInputModule,
        MatCheckboxModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
