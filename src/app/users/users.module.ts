import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersListItemComponent } from './users-list-item/users-list-item.component';
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UsersComponent, UsersListComponent, UsersListItemComponent, UserCardComponent],
  exports: [UsersComponent, UsersListComponent, UsersListItemComponent, UserCardComponent]
})
export class UsersModule { }
