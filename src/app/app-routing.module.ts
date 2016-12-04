import {NgModule} from "@angular/core";
import {Routes, RouterModule, Route} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {UpdateComponent} from "./update/update.component";
import {EnvironmentComponent} from "./environment/environment.component";
import {SettingComponent} from "./setting/setting.component";

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

const routes: Routes = [
    dashboardRoute,
    settingRoute,
    // environmentRoute,
    updateRoute,
    {
        path: '**',
        component: DashboardComponent

    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}
