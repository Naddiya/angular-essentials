import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-essentials';
  rootName = 'Maximilien';
  rootItems = ['Bananas', 'Aplle', 'Orange'];

  onNameChanged(newName: any) {
    this.rootName = newName;
  }

  onItemWasAdded(newItem: any) {
    this.rootItems.push(newItem);
    console.log(this.rootItems);
  }
}
