import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <input type="text" (input)="onUserInput($event)" [value]="name" />
    <p>Hello {{ name }}</p>
    <p>I'm the user commponent</p>
  `,
})
export class UserComponent {
  name = 'User';

  onUserInput(event: any) {
    this.name = event.target.value;
  }
}
