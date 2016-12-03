import { Component, OnInit , Input} from '@angular/core';
import { User } from './../../models/User';
import { IUser } from './../../models/IUser';

@Component({
  selector: 'app-users-list-item',
  templateUrl: './users-list-item.component.html',
  styleUrls: ['./users-list-item.component.css']
})
export class UsersListItemComponent implements OnInit {
  @Input() user: User;
  // user: User = null;
  constructor() { }

  ngOnInit() {
    this.user.nikname = 'ff';
  }

}
