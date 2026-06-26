import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-switch-theme-button',
  imports: [],
  templateUrl: './switch-theme-button.html',
  styleUrl: './switch-theme-button.scss',
})
export class SwitchThemeButton {
  // Input received from parent
  switchTheme = input.required<boolean>();

  // Output to notify parent of the state change
  themeChanged = output<boolean>();

  onCheckboxChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.themeChanged.emit(inputElement.checked);
  }
}
