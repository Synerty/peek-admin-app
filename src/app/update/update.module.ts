import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {UpdateComponent} from "./update.component";
import {UpdatePlatformComponent} from "./update-platform/update-platform.component";
import {UpdatePappComponent} from "./update-papp/update-papp.component";
import {UpdateLicenseComponent} from "./update-license/update-license.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [UpdateComponent, UpdatePlatformComponent, UpdatePappComponent, UpdateLicenseComponent]
})
export class UpdateModule {
}
