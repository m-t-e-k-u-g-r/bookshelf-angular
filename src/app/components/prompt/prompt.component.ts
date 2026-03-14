import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-prompt-component',
  template: `
    @if (open) {
      <div class="dialog_overlay">
        <div class="dialog-box">
          <h2>{{ title }}</h2>
          <p>{{ message }}</p>
          <input type="text" [(ngModel)]="inputValue"/>
          <div>
            <button (click)="onClick()">
              Submit
            </button>
            <button (click)="handleCancel()">
              Cancel
            </button>
          </div>
        </div>
      </div>
    }
  `,
  imports: [
    FormsModule
  ]
})
export class PromptComponent {
  @Input() open!: boolean;
  @Input() title?: string;
  @Input() message?: string;

  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<string>();

  inputValue = '';

  onClick() {
    console.log('submit clicked');
    this.submit.emit(this.inputValue);
    this.close.emit();
  }

  handleCancel() {
    this.close.emit();
  }
}
