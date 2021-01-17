import { Component, OnInit } from "@angular/core"
import { VortexService, VortexStatusService , NgLifeCycleEvents} from "@synerty/vortexjs"
import { BalloonMsgService } from "@synerty/peek-plugin-base-js"
import { takeUntil } from "rxjs-compat/operator/takeUntil";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit extends NgLifeCycleEvents{
    constructor(private vortexService: VortexService,
                private vortexStatusService: VortexStatusService,
                private balloonMsg: BalloonMsgService,
    ) {
        super();
        vortexStatusService.errors
            .pipe(takeUntil(this.onDestroyEvent))
            .subscribe((msg:string) => balloonMsg.showError(msg))
        
        vortexStatusService.warning
            .pipe(takeUntil(this.onDestroyEvent))
            .subscribe((msg:string) => balloonMsg.showWarning(msg))
        
    }
    
    ngOnInit() {
        // This causes two reconnections when the app starts
        // this.vortexService.reconnect();
    }
}
