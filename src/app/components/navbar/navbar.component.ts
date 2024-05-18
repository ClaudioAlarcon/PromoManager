import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Loading3Component } from "../loading/loading3/loading3.component";

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
    imports: [Loading3Component]
})
export class NavbarComponent {
  @Input() isLightTheme: boolean = false;
  @Output() toggleThemeEvent = new EventEmitter<void>();

  constructor() { }

  themeIcon = 'bi bi-sun';
  isLoggedIn: boolean = false;

  toggleTheme() {
    this.toggleThemeEvent.emit();

    if (this.themeIcon === 'bi bi-sun') {
      this.themeIcon = 'bi bi-moon';
      this.isLightTheme = false;
    } else {
      this.themeIcon = 'bi bi-sun';
      this.isLightTheme = true;
    }
  }

  login(this: any) {
    this.isLoggedIn = true;
    console.log(this.isLoggedIn);
  }
}
