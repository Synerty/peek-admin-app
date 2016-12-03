import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'app-update-license',
    templateUrl: './update-license.component.html',
    styleUrls: ['./update-license.component.css']
})
export class UpdateLicenseComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    old() {
        // // Hack to disable checkboxes
        // $(".disable-checkbox").prop("disabled", true);
        //
        // $scope.data = {};
        //
        // var payloadFilt = {key: "admin.capabilities.data"};
        //
        // self.processPayload = function (payload) {
        //     if (payload.result) {
        //         if (payload.result.success)
        //             logInfo(payload.result.message);
        //         else
        //             logError(payload.result.message);
        //     }
        //
        //     if (payload.tuples.length) {
        //         $scope.data = payload.tuples[0].data;
        //         $scope.pageData.supportExceeded = $scope.data.supportExceeded;
        //     }
        //     applyScope($scope);
        // };
        //
        // self._endpoint = new PayloadEndpoint(payloadFilt,
        //     bind(self, self.processPayload), $scope);
        //
        // $scope.updateLicense = function () {
        //     var dataWrapTuple = new Tuple('c.s.r.datawraptuple');
        //     dataWrapTuple.data = $scope.data.newkey;
        //     vortexSendTuple(payloadFilt, dataWrapTuple);
        // };
        //
        //
        // vortexSendFilt(payloadFilt);
    }
}
