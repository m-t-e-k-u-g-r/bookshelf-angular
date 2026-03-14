import { Component } from '@angular/core';
import {AccordionItemComponent} from '../accordion-item/accordion-item.component';

@Component({
  selector: 'app-sidebar',
  imports: [
    AccordionItemComponent
  ],
  template: `
    <app-accordion-body title="Shelves">
    </app-accordion-body>
  `,
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {}
