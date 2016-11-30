import {Component, OnInit} from "@angular/core";
import {
    VortexService,
    ComponentLifecycleEventEmitter,
    TupleLoader
} from "@synerty/vortexjs";

interface PappMenuItem {
    templateUrl: string;
    title: string;
    url: string;
}

@Component({
    selector: 'app-nav-apps',
    templateUrl: './nav-apps.component.html',
    styleUrls: ['./nav-apps.component.css']
})
export class NavAppsComponent extends ComponentLifecycleEventEmitter implements OnInit {
    private readonly filt = {
        papp: "peek_server",
        key: "nav.adm.papp.list"
    };

    pappsMenuData: PappMenuItem[] = [];

    constructor(vortexService: VortexService) {
        super();

        vortexService.createTupleLoader(this,
            () => {
                return this.filt;
            }).observable.subscribe(
            tuples => this.pappsMenuData = <PappMenuItem[]>tuples);
    }

    ngOnInit() {
    }

}
