import { Component } from '@angular/core';
import { UserDto } from '@user/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'KfmFramework';
  user?: UserDto;
}
