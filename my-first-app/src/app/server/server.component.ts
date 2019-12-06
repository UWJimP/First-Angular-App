import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = "okay";
    serverEnabled: boolean = false;
    serverName = '';

    constructor() {
        //setTimeout(this.changeEnabled, 2000);
        setTimeout(() => {
            this.changeEnabled();
        }, 5000);
    }

    changeEnabled() {
        this.serverEnabled = true;
        this.serverStatus = "down";
    }

    getServerID() {
        return this.serverId;
    }

    getServerStatus() {
        return this.serverStatus;
    }

    onClickButton() {
        this.serverEnabled = false;
        this.serverStatus = "adding new server: " + this.serverName;
        setTimeout(() => {
            this.changeEnabled();
        }, 3000);
    }

    onServerNaming(event: Event) {
        this.serverName = (<HTMLInputElement>event.target).value;
    }
}