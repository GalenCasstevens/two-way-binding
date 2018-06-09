import { Component } from '@angular/core';


@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',

})
export class UsernameComponent {
  username = '';
  allowNewUsername = false;

  // constructor() {
  //   if (this.username !== '' || this.username !== null) {
  //     this.allowNewUsername = false;
  //   } else {
  //     this.allowNewUsername = true;
  //   }
  // }

  ngOnInit() {
  }

  onAddUser() {
    this.username = '';
  }

  isUsernameEmpty() {
    return this.username === '';
  }
}
