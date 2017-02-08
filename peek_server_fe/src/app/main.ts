import "../polyfills.ts";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {enableProdMode} from "@angular/core";
import {environment} from "../environments/environment";
import {AppModule} from "./app.module";


if (environment.production) {
    enableProdMode();
}



import {VortexService} from "@synerty/vortexjs";
let host = location.host.split(':')[0];
VortexService.setVortexUrl(`ws://${host}:8013/vortexws`);


platformBrowserDynamic().bootstrapModule(AppModule);
