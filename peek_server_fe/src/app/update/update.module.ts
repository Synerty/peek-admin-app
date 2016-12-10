import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {UpdateComponent} from "./update.component";
import {UpdatePlatformComponent} from "./update-platform/update-platform.component";
import {UpdatePappComponent} from "./update-papp/update-papp.component";
import {UpdateLicenseComponent} from "./update-license/update-license.component";
import {FileUploadModule} from "ng2-file-upload";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FileUploadModule
    ],
    declarations: [UpdateComponent,
        UpdatePlatformComponent,
        UpdatePappComponent,
        UpdateLicenseComponent
    ]
})
export class UpdateModule {
}
