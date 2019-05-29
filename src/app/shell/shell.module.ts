import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [ShellComponent, WelcomeComponent, HeaderComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class ShellModule { }
