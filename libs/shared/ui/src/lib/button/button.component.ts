import { Component, Input } from '@angular/core';

@Component({
  selector: 'ainter-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input()
  isPrimary: boolean = false;

  @Input()
  isRounded: boolean = false;

  get roundedClass() {
    return this.isRounded ? 'rounded' : '';
  }
}
