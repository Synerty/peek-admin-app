import {Component, OnInit} from "@angular/core";
import {
    VortexService,
    ComponentLifecycleEventEmitter,
    TupleLoader,
    Tuple
} from "@synerty/vortexjs";


class UserTuple extends Tuple {
    constructor() {
        super('peek_server.PeekAdmNavbarUserTuple');
    }

    supportExceeded: boolean;
    demoExceeded: boolean;
    countsExceeded: boolean;
    username: string;
}

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent extends ComponentLifecycleEventEmitter implements OnInit {

    private readonly userDataFilt = {
        papp: 'peek_server',
        key: "nav.adm.user.data"
    };

    user: UserTuple = new UserTuple();

    constructor(vortexService: VortexService) {
        super();

        vortexService.createTupleLoader(this,
            () => {
                return this.userDataFilt;
            }).observable.subscribe(tuples => this.user = <UserTuple>tuples[0]);
    }

    ngOnInit() {
    }

}
