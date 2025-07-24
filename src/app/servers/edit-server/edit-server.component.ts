import { ActivatedRoute } from '@angular/router';
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
  queryparams :  any;
  fragment : any;

  constructor(
    private serversService : ServersService,
    private route : ActivatedRoute,
  ) { }

  ngOnInit(): void {
    console.log("qury parmas ", this.route.snapshot.queryParams)
    console.log("fragment is :", this.route.snapshot.fragment)
    this.queryparams = this.route.queryParams.subscribe()
    this.fragment = this.route.fragment.subscribe()

    console.log("query :", this.queryparams, this.fragment);
    this.server = this.serversService.getServer(1)
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer(){
    console.log("update sevrer :",this.serverName, this.serverStatus )
    this.serversService.updateServer(this.server.id, {name : this.serverName, status : this.serverStatus})
  }


  
}
