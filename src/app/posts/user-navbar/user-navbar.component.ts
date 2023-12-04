import { Component } from '@angular/core';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent {
    
}
document.addEventListener("DOMContentLoaded", () => {
  const modeSwitchButtons = document.querySelectorAll('.btn-modeswitch');
  const html = document.querySelector('html');

  if (html) {
      modeSwitchButtons.forEach((button) => {
          button.addEventListener('click', (event) => {
              const themeValue = button.getAttribute('data-bs-theme-value');

              if (themeValue === 'light') {
                  html.setAttribute('data-theme', 'light');
              } else if (themeValue === 'dark') {
                  html.setAttribute('data-theme', 'dark');
              } else if (themeValue === 'auto') {
                  html.removeAttribute('data-theme');
              }

              // Store the theme preference in localStorage
              if (themeValue) {
                  localStorage.setItem('theme', themeValue);
              }
          });
      });

      // Check for a stored theme preference in localStorage
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
          html.setAttribute('data-theme', storedTheme);
      }
  }
});

