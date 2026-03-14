import {Component, inject, Input, signal} from '@angular/core';
import {ShelfService} from '../../services/shelf.service';
import {SidebarEntryComponent} from '../sidebar/sidebar-entry/sidebar-entry.component';

@Component({
  selector: 'app-accordion-body',
  imports: [
    SidebarEntryComponent
  ],
  template: `
    <div class="custom_accordion">
      <div class="accordion_item">
        <button class="accordion_header" (click)="toggle()">
          {{ title }}
          <span [class.collapsed]="!isOpen()">▼</span>
        </button>
        @if (isOpen()) {
          <div class="accordion_body">
            @for (entry of shelfService.sidebarData(); track entry.name) {
              <app-sidebar-entry
                [name]="entry.name"
                [count]="entry.count"
              />
            }
          </div>
        }
      </div>
    </div>
  `,
  styleUrl: './accordion-item.component.css',
})
export class AccordionItemComponent {
  shelfService = inject(ShelfService);
  isOpen = signal(true);
  @Input() title!: string;

  toggle() {
    this.isOpen.set(!this.isOpen());
  }
}
