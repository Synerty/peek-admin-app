import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {NavbarComponent} from "./navbar.component";
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
    exports: [NavbarComponent],
    imports: [
        CommonModule,
        RouterModule,
        DropdownModule
    ],
    declarations: [NavbarComponent],
})
export class NavbarModule {
}
