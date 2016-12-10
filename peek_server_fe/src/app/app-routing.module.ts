import {NgModule} from "@angular/core";
import {Routes, RouterModule, Route, Router} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {UpdateComponent} from "./update/update.component";
import {SettingComponent} from "./setting/setting.component";
import {VortexService, ComponentLifecycleEventEmitter, Tuple} from "@synerty/vortexjs";
import {pappRoutes} from "../PappRoutes";


export const dashboardRoute: Route = {
    path: '',
    component: DashboardComponent
};

export const settingRoute: Route = {
    path: 'setting',
    component: SettingComponent
};

export const environmentRoute: Route = {
    path: 'environment',
    // component: EnvironmentComponent
};

export const updateRoute: Route = {
    path: 'update',
    component: UpdateComponent
};

const staticRoutes: Routes = [
    dashboardRoute,
    settingRoute,
    // environmentRoute,
    updateRoute,
    {
        path: '**',
        component: DashboardComponent

    }
];



class PappRoutesTuple extends Tuple {
    constructor() {
        super('peek_server.PappRoutesTuple');
    }

    pappName: string;
    lazyLoadModulePath: string;
}


@NgModule({
    imports: [RouterModule.forRoot([ ...pappRoutes, ...staticRoutes])],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule extends ComponentLifecycleEventEmitter {

    // ----------- Load Papp Menu Items
    // Make it public because AppRouterModule uses it as well
    private readonly pappRoutesFilt = {
        papp: "peek_server",
        key: "peek_server.papp.routerModules"
    };

    constructor(private router: Router,
                vortexService: VortexService) {
        super();

        // vortexService.createEndpoint(this, this.pappRoutesFilt).observable
        //     .subscribe(payload => this.updateRoutes(<PappRoutesTuple[]>payload.tuples));
        //
        // vortexService.sendFilt(this.pappRoutesFilt);
    }

    updateRoutes(pappRoutes: PappRoutesTuple[]) {
        let pappLazyLoadRoutes = [];

        for (let pappRoute of pappRoutes) {
            pappLazyLoadRoutes.push({
                path: pappRoute.pappName,
                loadChildren: pappRoute.lazyLoadModulePath
            });
        }

        this.router.resetConfig([
            ...pappLazyLoadRoutes,
            ...staticRoutes
        ]);
    }
}
