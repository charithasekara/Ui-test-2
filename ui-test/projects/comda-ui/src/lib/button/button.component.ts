// button.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'comda-ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  // Input properties
  @Input() placeholder: string = ''; // The placeholder text of the button
  @Input() buttonText: string = 'Button'; // The button text
  @Input() disabled: boolean = false; // The disabled state of the button
  @Input() icon: string = ''; // The icon of the button
  @Input() iconPosition: 'left' | 'right' = 'left'; // The position of the icon
  @Input() size: 'small' | 'medium' | 'large' = 'medium'; // The size of the button

  // Output event
  @Output() click = new EventEmitter<void>(); // The click event of the button

  constructor() { }

  // Method to emit the click event
  onClick() {
    if (!this.disabled) {
      this.click.emit();
    }
  }
}
