import { Component } from '@angular/core';
import { ButtonThemeComponent } from '../button-theme/button-theme.component';

@Component({
  selector: 'app-header',
  imports: [ButtonThemeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
