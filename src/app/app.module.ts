import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {Ng2BalloonMsgService, Ng2BalloonMsgModule} from "@synerty/ng2-balloon-msg";
import {VortexService} from "@synerty/vortexjs";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {NavbarModule} from "./navbar/navbar.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        NavbarModule,
        Ng2BalloonMsgModule
    ],
    providers: [Ng2BalloonMsgService, VortexService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
