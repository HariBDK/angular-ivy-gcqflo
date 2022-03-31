import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  n: string = '';

  call() {
    var input = document.querySelectorAll('input');
    var bind = document.querySelectorAll('span');
    for (let i = 0; i < input.length; i++) {
      bind[i].innerText = input[i].value;
    }
  }
}
