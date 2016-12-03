import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {NavbarComponent} from "./navbar.component";
import {NavAppsComponent} from "./nav-apps/nav-apps.component";

@NgModule({
    exports: [NavbarComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [NavbarComponent, NavAppsComponent]
})
export class NavbarModule {
}
