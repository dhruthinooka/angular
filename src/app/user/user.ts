import { Component, Input, input, computed } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;


  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {
  }
}
