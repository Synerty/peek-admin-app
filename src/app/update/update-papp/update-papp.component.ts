import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'app-update-papp',
    templateUrl: './update-papp.component.html',
    styleUrls: ['./update-papp.component.css']
})
export class UpdatePappComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    old() {


        self.loader = new AngFormLoadController($scope,
            {
                papp: 'platform',
                key: "admin.papp.version.info"
            }, {
                objName: 'pappVersions',
                dataIsArray: true
            });

        self.rspGood = function (data, status, headers, config) {
            $scope.progressPercentage = '';
            if (data.error) {
                logError("Peek App Update Failed<br/>" + data.error);
            } else {
                self.loader.load();
                logSuccess("Peek App Update Complete<br/>New version is "
                    + data.message);
            }
        };

        self.rspBad = function (data, status, headers, config) {
            $scope.progressPercentage = '';
            logError("Peek App Update Failed<br/>" + data.error);
        };

        $scope.upload = function (files, event, rejectedFiles) {
            if (rejectedFiles && rejectedFiles.length) {
                logError(rejectedFiles[0].name + " does not end in .tar.bz2");
                return;
            }

            if (!(files && files.length))
                return;

            var file = files[0];
            Upload.upload({
                url: '/peek_server_be.update.papp',
                file: file
            }).progress(function (evt) {
                $scope.progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            }).success(self.rspGood)
                .error(self.rspBad);
        };


    }
}
