import {Component, OnInit} from "@angular/core";
import {
    VortexService,
    ComponentLifecycleEventEmitter,
    TupleLoader
} from "@synerty/vortexjs";

interface Stat {
    desc: string;
    value: string;
}

@Component({
    selector: 'app-dashboard-stats',
    templateUrl: './dashboard-stats.component.html',
    styleUrls: ['./dashboard-stats.component.css']
})
export class DashboardStatsComponent extends ComponentLifecycleEventEmitter implements OnInit {
    private readonly statsFilt = {
        papp: 'peek_server',
        key: "peakadm.dashboard.list.data"
    };

    stats: Stat[] = [];
    statsLoader: TupleLoader;

    constructor(vortexService: VortexService) {
        super();

        this.statsLoader = vortexService.createTupleLoader(this,
            () => {
                return this.statsFilt;
            });

        this.statsLoader.observable.subscribe(
            tuples => this.stats = <Stat[]>tuples);

    }

    ngOnInit() {
    }

}
