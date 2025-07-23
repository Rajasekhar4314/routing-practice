import { ServersService } from './servers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  // providers: [ ServersService ]
})
export class ServersComponent implements OnInit {

  public servers : {id :number, name : string, status : string}[] = []

  constructor(
    private serversService : ServersService
  ) { }

  ngOnInit(): void {
    this.servers = this.serversService.getServers()
  }

}
