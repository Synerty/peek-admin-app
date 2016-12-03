import {Component, OnInit} from "@angular/core";
import {
    VortexService,
    ComponentLifecycleEventEmitter,
    TupleLoader
} from "@synerty/vortexjs";
import {Ng2BalloonMsgService} from "@synerty/ng2-balloon-msg";

@Component({
    selector: 'app-update-papp',
    templateUrl: './update-papp.component.html',
    styleUrls: ['./update-papp.component.css']
})
export class UpdatePappComponent extends ComponentLifecycleEventEmitter implements OnInit {
    private readonly filt = {
        papp: 'peek_server',
        key: "admin.papp.version.info"
    };

    loader: TupleLoader;
    pappVersions : any[];

    constructor(private vortexService: VortexService,
                private balloonService: Ng2BalloonMsgService) {
        super();

        this.loader = vortexService.createTupleLoader(this, this.filt);
        this.loader.observable.subscribe(tuples => this.pappVersions = <any[]>tuples);

    }

    ngOnInit() {
    }

    old() {

        // self.rspGood = function (data, status, headers, config) {
        //     $scope.progressPercentage = '';
        //     if (data.error) {
        //         logError("Peek App Update Failed<br/>" + data.error);
        //     } else {
        //         self.loader.load();
        //         logSuccess("Peek App Update Complete<br/>New version is "
        //             + data.message);
        //     }
        // };
        //
        // self.rspBad = function (data, status, headers, config) {
        //     $scope.progressPercentage = '';
        //     logError("Peek App Update Failed<br/>" + data.error);
        // };
        //
        // $scope.upload = function (files, event, rejectedFiles) {
        //     if (rejectedFiles && rejectedFiles.length) {
        //         logError(rejectedFiles[0].name + " does not end in .tar.bz2");
        //         return;
        //     }
        //
        //     if (!(files && files.length))
        //         return;
        //
        //     var file = files[0];
        //     Upload.upload({
        //         url: '/peek_server_be.update.papp',
        //         file: file
        //     }).progress(function (evt) {
        //         $scope.progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
        //     }).success(self.rspGood)
        //         .error(self.rspBad);
        // };


    }
}
