import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { Loading3Component } from './components/loading/loading3/loading3.component';
import { AboutComponent } from "./components/pages/about/about.component";
import { ContactComponent } from "./components/pages/contact/contact.component";
import { TranlateModule } from './tranlate/tranlate.module';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, NavbarComponent, FooterComponent, Loading3Component, AboutComponent, ContactComponent, TranlateModule]
})

export class AppComponent {
  title = 'PromoManager';
  isLightTheme: boolean = true;
  preSelectedLanguage = 'en'; 

  constructor (private translate: TranslateService) {

  }

  toggleTheme() {
    this.isLightTheme = !this.isLightTheme;
    console.log('Tema cambiado:', this.isLightTheme ? 'Claro' : 'Oscuro');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    this.preSelectedLanguage = language;
  }
}
