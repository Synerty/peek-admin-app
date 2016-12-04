import {Component, OnInit, Input} from "@angular/core";
import {
    VortexService,
    ComponentLifecycleEventEmitter,
    TupleLoader,
    Tuple,
    Payload
} from "@synerty/vortexjs";
import {Ng2BalloonMsgService} from "@synerty/ng2-balloon-msg";
import {FileUploader} from "ng2-file-upload";

@Component({
    selector: 'app-update-platform',
    templateUrl: './update-platform.component.html',
    styleUrls: ['./update-platform.component.css']
})
export class UpdatePlatformComponent extends ComponentLifecycleEventEmitter implements OnInit {

    @Input()
    licenced: boolean = false;

    serverRestarting: boolean = false;
    progressPercentage: string = '';

    uploader: FileUploader = new FileUploader({
        url: '/peek_server.update.platform',
        isHTML5: true,
        disableMultipart: true,
        queueLimit: 1,
        method: 'POST',
        autoUpload: true,
        removeAfterUpload: false
    });
    hasBaseDropZoneOver: boolean = false;

    constructor(private vortexService: VortexService,
                private balloonMsg: Ng2BalloonMsgService) {
        super();

        this.doCheckEvent.subscribe(() => this.checkProgress());
    }

    ngOnInit() {
    }

    uploadEnabled() {
        return this.licenced && this.uploader.queue.length == 0;
    }

    checkProgress() {
        this.progressPercentage = '';

        if (this.uploader.queue.length != 1)
            return;

        let fileItem = this.uploader.queue[0];
        if (fileItem._xhr == null)
            return;

        let status = fileItem._xhr.status;
        let responseJsonStr = fileItem._xhr.responseText;

        if (!status || status == 200 && !responseJsonStr.length) {
            this.progressPercentage = fileItem.progress + '%';
            return;
        }

        let data = JSON.parse(responseJsonStr);

        if (status == 200) {
            this.progressPercentage = '';
            if (data.error) {
                this.balloonMsg.showError("Software Update Failed\n" + data.error);
            } else {
                this.serverRestarting = true;
                this.balloonMsg.showSuccess("Software Update Complete<br/>New version is "
                    + data.message + "<br/><br/>Server will restart");
                this.reload();
            }

        } else {
            this.progressPercentage = '';
            this.balloonMsg.showError("Software Update Failed<br/> Status : " + status);
        }

        this.uploader.removeFromQueue(fileItem);
    }


    fileOverBase(e: any): void {
        this.hasBaseDropZoneOver = e;
    }


    reload() {
        setTimeout(function () {
            this.balloonMsg.showInfo("Server is restarting");
        }, 3000);
        setTimeout(function () {
            location.reload();
        }, 8000);
    };

}
