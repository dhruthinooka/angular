import { Component, Input, Output, EventEmitter } from '@angular/core';

// type UserObj = {
//   id: string;
//   avatar: string;
//   name: string;
// }

interface UserInterface {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input({ required: true }) user!: UserInterface;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
