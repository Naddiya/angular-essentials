import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
      <hr>
    <div class="container">
      <h2>Your dashboard !</h2>
      <button (click)="onSwitchState($event)">Switch State</button>
      <p [textContent]="loadState"></p>
      <input type="text" [(ngModel)]="loadState">
    </div>
  `,
})
export class DashboardComponent {
  loadState = 'Loading ...';

  onSwitchState(event: any) {
    if (this.loadState !== 'Finished') {
      this.loadState = 'Finished';
    } else if (this.loadState === 'Finished') {
      this.loadState = 'Loading ...';
    }
  }
}
