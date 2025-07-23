import { ServersService } from './../servers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  server : any;

  constructor(
    private serversService : ServersService
  ) { }

  ngOnInit(): void {
    this.server = this.serversService.getServer(2)
    console.log("server cmp:", this.server)
  }

}
