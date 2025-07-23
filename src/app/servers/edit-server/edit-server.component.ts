import { ServersService } from './../servers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server : any;
  serverName !: string;
  serverStatus !: string;

  constructor(
    private serversService : ServersService
  ) { }

  ngOnInit(): void {
    this.server = this.serversService.getServer(1)
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer(){
    console.log("update sevrer :",this.serverName, this.serverStatus )
    this.serversService.updateServer(this.server.id, {name : this.serverName, status : this.serverStatus})
  }



}
