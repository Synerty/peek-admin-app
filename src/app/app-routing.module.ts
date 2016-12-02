import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {UpdateModule} from "./update/update.module";
import {SettingModule} from "./setting/setting.module";
import {DashboardModule} from "./dashboard/dashboard.module";
import {EnvironmentModule} from "./environment/environment.module";

const routes: Routes = [
    {
        path: '',
        children: [DashboardModule]
    },
    {
        path: '/update',
        children: [UpdateModule]
    },
    {
        path: '/setting',
        children: [SettingModule]
    },
    {
        path: '/environment',
        children: [EnvironmentModule]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}
