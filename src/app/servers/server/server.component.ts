import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServersService } from './../servers.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit, OnDestroy {

  server : any;
  id : number;

  paramsSubscription: Subscription;
  
  constructor(
    private serversService : ServersService,
    private route : ActivatedRoute,
    private router : Router
  ) { }
  
  ngOnInit(): void {
    console.log("server 000:", this.id)
    // this.id = +this.route.snapshot.params['id']
    this.id =  this.route.snapshot.params['id']
    
    this.server = this.serversService.getServer(this.id);

    this.paramsSubscription = this.route.params.subscribe(    
      (params : Params) => {
        console.log("subscribed ", params['id'] )
        this.server = this.serversService.getServer(+params['id']);
      }
    )

    console.log("server cmp:", this.server)
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

  onEdit(){
    // this.router.navigate(['servers', this.id, 'edit'])
    this.router.navigate(['edit'], { relativeTo : this.route, queryParamsHandling : 'preserve' })

  }

}
