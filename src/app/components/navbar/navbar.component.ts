import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Loading3Component } from "../loading/loading3/loading3.component";
import { TranslateService } from '@ngx-translate/core';
import { TranlateModule } from '../../tranlate/tranlate.module';

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
    imports: [Loading3Component, TranlateModule]
})
export class NavbarComponent implements OnInit{

  @Input() isLightTheme: boolean = true;
  @Input() selectedLanguage: string = "es";
  @Output() toggleThemeEvent = new EventEmitter<void>();

  constructor(private translate: TranslateService) { 
    translate.setDefaultLang(this.selectedLanguage);
    translate.use(this.selectedLanguage); 
  }
  ngOnInit(): void {
    this.translate.setDefaultLang(this.selectedLanguage);
    this.translate.use(this.selectedLanguage);
  }
  
  themeIcon = 'bi bi-sun';
  isLoggedIn: boolean = false;

  
  toggleTheme() {
    this.toggleThemeEvent.emit();
    if (this.themeIcon === 'bi bi-sun') {
      this.themeIcon = 'bi bi-moon';
    } else {
      this.themeIcon = 'bi bi-sun';
    }
  }

  setLanguage(language: string) {
    this.selectedLanguage = language;
    this.translate.use(language);
  }

  login(this: any) {
    this.isLoggedIn = true;
  }
}
