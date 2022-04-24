import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar navbar">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="assets/img/LOGO.png" alt="" width="250px" height="100px">
        </a>
      </div>
    </nav>
  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
