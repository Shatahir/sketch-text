import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  values: any = [];
  count: number = 0;

  element: HTMLElement | undefined;

  addvalue() {
    this.values.push('');
  }

  changeBgColor(i: any) {
    let _id = 'bgColor-' + i;
    this.element = document.getElementById(_id) as HTMLElement;
    if (this.element.classList.contains('gray')) {
      this.element.classList.remove('gray');
      this.count -= 1;
    } else {
      this.element.classList.add('gray');
      this.count += 1;
    }
  }
}
