import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { NavAppsComponent } from './nav-apps/nav-apps.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavbarComponent, NavAppsComponent]
})
export class NavbarModule { }
