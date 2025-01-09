import { Component } from '@angular/core';

@Component({
  selector: 'app-button-theme',
  imports: [],
  templateUrl: './button-theme.component.html',
  styleUrl: './button-theme.component.scss'
})
export class ButtonThemeComponent {
  isDarkMode = false;

  toggleTheme() {

    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

  }
}
