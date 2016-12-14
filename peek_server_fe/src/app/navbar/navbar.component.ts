import {Component, OnInit} from "@angular/core";
import {
    VortexService,
    ComponentLifecycleEventEmitter,
    TupleLoader,
    Tuple
} from "@synerty/vortexjs";
import {
    dashboardRoute,
    settingRoute,
    updateRoute,
    environmentRoute
} from "../app-routing.module";


class UserTuple extends Tuple {
    constructor() {
        super('peek_server.PeekAdmNavbarUserTuple');
    }

    supportExceeded: boolean;
    demoExceeded: boolean;
    countsExceeded: boolean;
    username: string;
}


class PluginAdminMenuItemTuple extends Tuple {
    constructor() {
        super('peek_server.PluginAdminMenuItemTuple');
    }

    name: string;
    title: string;
    resourcePath: string;
}

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent extends ComponentLifecycleEventEmitter implements OnInit {

    // -------------- Load User Details
    private readonly userDataFilt = {
        plugin: 'peek_server',
        key: "nav.adm.user.data"
    };

    dashboardPath: string = dashboardRoute.path;
    settingPath: string = settingRoute.path;
    environmentPath: string = environmentRoute.path;
    updatePath: string = updateRoute.path;

    user: UserTuple = new UserTuple();

    // ----------- Load Plugin Menu Items
    // Make it public because AppRouterModule uses it as well
    private readonly pluginMenuItemsfilt = {
        plugin: "peek_server",
        key: "nav.adm.plugin.list"
    };

    pluginsMenuData: PluginAdminMenuItemTuple[] = [];


    constructor(private vortexService: VortexService) {
        super();
    }

    ngOnInit() {

        this.vortexService.createTupleLoader(this, this.userDataFilt)
            .observable.subscribe(tuples => this.user = <UserTuple>tuples[0]);

        this.vortexService.createTupleLoader(this, this.pluginMenuItemsfilt)
            .observable.subscribe(tuples => this.pluginsMenuData = <PluginAdminMenuItemTuple[]>tuples);
    }


}
