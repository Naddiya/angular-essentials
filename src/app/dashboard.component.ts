import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <div>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Navbar</span>
        </div>
      </nav>
      <div>
        <button
          type="button"
          class="btn btn-primary"
          (click)="toggleState($event)"
        >
          <input type="text" [(ngModel)]="loadState" />
          {{ loadState }}
        </button>
      </div>
    </div>
  `,
})
export class DashboardComponent {
  loadState = 'Loading ...';

  toggleState(event: any) {
    if (this.loadState !== 'Finished') {
      this.loadState = 'Finished';
    } else if (this.loadState === 'Finished') {
      this.loadState = 'Loading ...';
    }
  }
}
