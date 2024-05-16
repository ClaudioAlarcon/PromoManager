import { Component } from '@angular/core';
import { Loading3Component } from "../loading/loading3/loading3.component";

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
    imports: [Loading3Component]
})
export class NavbarComponent {

  isLoggedIn: boolean = false;
  constructor() { }
  
  ngOnInit(): void {
  }

  logo = "</>";
  

  login(this: any) {
    this.isLoggedIn = true;
    console.log(this.isLoggedIn);
  }
}
