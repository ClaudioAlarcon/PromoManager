import { Component } from '@angular/core';
import { TranlateModule } from '../../../tranlate/tranlate.module';

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss',
    imports: [TranlateModule]
})
export class AboutComponent {

}
