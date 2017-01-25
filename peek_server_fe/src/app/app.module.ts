import {BrowserModule} from "@angular/platform-browser";
import {NgModule, NgModuleFactoryLoader} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {Ng2BalloonMsgService, Ng2BalloonMsgModule} from "@synerty/ng2-balloon-msg";
import {VortexService, VortexStatusService} from "@synerty/vortexjs";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {DashboardModule} from "./dashboard/dashboard.module";
import {SettingModule} from "./setting/setting.module";
import {NavbarModule} from "./navbar/navbar.module";
import {UpdateModule} from "./update/update.module";



@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        Ng2BalloonMsgModule,
        DashboardModule,
        SettingModule,
        NavbarModule,
        UpdateModule
    ],
    providers: [
        Ng2BalloonMsgService, VortexService, VortexStatusService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
