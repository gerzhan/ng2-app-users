import { Component, OnInit } from '@angular/core';
import { User } from './../../models/User';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  usersList: Array<User>;
  constructor() { }

  ngOnInit() {
    this.usersList = [
        new User({id: 1, name: 'Demo', nikname: ''}),
        new User({id: 2, name: 'Demo 33', nikname: ''})
        ];
  }

}
