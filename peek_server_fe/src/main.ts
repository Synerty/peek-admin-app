import "./polyfills.ts";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {enableProdMode} from "@angular/core";
import {environment} from "./environments/environment";
import {AppModule} from "./app/";


// if (require.hasOwnProperty("context")) {
// /// <reference path="./webpack.d.ts" />
// /// <reference path="./webpack-env.d.ts" />
//     let context = require.context("./", true, /papp_.*\/.*\.ts$/);
//     context.keys().forEach(context);
// }


if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
