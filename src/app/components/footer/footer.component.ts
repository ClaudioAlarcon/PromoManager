import { Component, Input } from '@angular/core';
import { TranlateModule } from '../../tranlate/tranlate.module';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranlateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Input() isLightTheme: boolean = false;
}
