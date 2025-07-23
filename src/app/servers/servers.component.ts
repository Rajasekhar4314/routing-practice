import { ActivatedRoute, Router } from '@angular/router';
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
    private router : Router,
    private serversService : ServersService,
    private route : ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.servers = this.serversService.getServers()
  }

  reload(){
    // this.router.navigate(['servers'], {relativeTo : this.route  });  // absolute path : '/servers', relative Path : 'servers'
    
  }

}
