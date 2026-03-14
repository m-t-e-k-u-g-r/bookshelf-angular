import {Component, Input, signal} from '@angular/core';

export type MenuItem = {
  label: string;
  action: () => void;
}

@Component({
  selector: 'app-kebab-menu',
  imports: [],
  template: `
    <div>
      <button (click)="toggle()">
        &#8942;
      </button>
      @if (open()) {
        <ul class="kebab-button">
          @for (item of items; track item.label) {
            <li (click)="item.action()">
              {{ item.label }}
            </li>
          }
        </ul>
      }
    </div>
  `,
  styleUrl: './kebab-menu.component.css',
})
export class KebabMenuComponent {
  @Input() items!: MenuItem[];
  open = signal(false);

  toggle() {
    this.open.update(o => !o);
  }
}
