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
  @Input() label: string = 'Button'; // The label text of the button

  // Output event
  @Output() click = new EventEmitter<void>(); // The click event of the button

  constructor() { }

  // Method to emit the click event
  onClick() {
    this.click.emit();
  }
}
