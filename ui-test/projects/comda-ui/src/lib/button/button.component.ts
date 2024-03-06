// button.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'comda-ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  // Input properties
  @Input() buttonText: string = ''; // The button text
  @Input() disabled: boolean = false; // The disabled state of the button
  @Input() icon: string = ''; // The icon of the button
  @Input() iconPosition: 'left' | 'right' = 'left'; // The position of the icon
  @Input() size: 'small' | 'medium' | 'large' = 'medium'; // The size of the button
  @Input() btnColor: string = '#007BFF'; // The color of the button
  @Input() txtColor: string = 'white'; // The color of the button text

  // Output event
  @Output() click = new EventEmitter<void>(); // The click event of the button

  constructor() { }

  // Method to emit the click event
  onClick() {
    if (!this.disabled) {
      this.click.emit();
    }
  }

  getFontSize() {
    switch (this.size) {
      case 'small':
        return 12;
      case 'medium':
        return 16;
      case 'large':
        return 20;
      default:
        return 16;
    }
  }
}
