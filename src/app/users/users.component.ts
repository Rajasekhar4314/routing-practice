import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : {id : number, name : string}[] = [
    {
      id : 1,
      name : "Raja"
    },
    {
      id : 2,
      name : "Chris"
    },
    {
      id : 3,
      name : "Ram"
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
