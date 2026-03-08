import { Component } from '@angular/core';
import {AccordionItemComponent} from '../accordion-item/accordion-item.component';

@Component({
  selector: 'app-sidebar',
  imports: [
    AccordionItemComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {}
