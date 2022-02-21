import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <hr />
    <div class="container">
      <input type="text" (input)="onUserInput($event)" [value]="name" />
      <p>Hello {{ name }}</p>
      <p>I'm the user commponent</p>
    </div>
    <hr />
    <app-user-detail></app-user-detail>
  `,
})
export class UserComponent {
  @Input() name = '';
  @Output() nameChanged = new EventEmitter<string>();

  onUserInput(event: any) {
    this.nameChanged.emit(event.target.value);
  }
}
