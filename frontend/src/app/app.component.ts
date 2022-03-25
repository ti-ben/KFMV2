import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { AuthService } from './security';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private translate: TranslateService, public authService:AuthService) {
    translate.setDefaultLang('fr');
    this.authService.me();
  }
}
