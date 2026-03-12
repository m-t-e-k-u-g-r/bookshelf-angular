import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-prompt-component',
  templateUrl: './prompt.component.html',
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
