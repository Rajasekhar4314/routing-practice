import { ActivatedRoute, CanDeactivate, Params, Router } from '@angular/router';
import { ServersService } from './../servers.service';
import { Component, OnInit } from '@angular/core';
import { query } from '@angular/animations';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server : any;
  id : number;
  serverName !: string;
  serverStatus !: string;
  queryparams :  any;
  fragment : any;
  allowEdit : boolean = false;
  changesSaved : boolean = false;

  constructor(
    private serversService : ServersService,
    private route : ActivatedRoute,
    private router : Router,
  ) { }

  ngOnInit(): void {
    console.log("qury parmas ", this.route.snapshot.queryParams)

    this.id = this.route.snapshot.params['id'];
    this.queryparams = this.route.queryParams.subscribe(
      (queryParams : Params) => {
        console.log("edit :", queryParams)
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
      }
    )
    this.fragment = this.route.fragment.subscribe()

    console.log("query :", this.queryparams, this.fragment);
    this.server = this.serversService.getServer(this.id)
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer(){
    console.log("update sevrer :",this.serverName, this.serverStatus )
    this.serversService.updateServer(this.server.id, {name : this.serverName, status : this.serverStatus})
    this.changesSaved = true
    this.router.navigate(['../'], {relativeTo : this.route, queryParamsHandling : 'preserve' })
  }

  canDeactivate() : Observable<boolean> | Promise<boolean> | boolean {
    if(!this.allowEdit){
      return true
    }

    if((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !(this.changesSaved)){
      return confirm("Do you want to discard the changes?")
    } else{
      return true;
    }
  }
  
}
