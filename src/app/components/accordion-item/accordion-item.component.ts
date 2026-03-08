import {Component, inject, Input, signal} from '@angular/core';
import {ShelfService} from '../../services/shelf.service';
import {SidebarEntryComponent} from '../sidebar/sidebar-entry/sidebar-entry.component';

@Component({
  selector: 'app-accordion-body',
  imports: [
    SidebarEntryComponent
  ],
  templateUrl: './accordion-item.component.html',
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
