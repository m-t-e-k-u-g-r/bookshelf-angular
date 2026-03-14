import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar-entry',
  imports: [],
  template: `
    <div class="shelf_entry" (click)="goToShelf()">
        <span class="shelf_wrapper">
            <p class="shelf_name">{{ name }}</p>
            <p class="count">{{ count }}</p>
        </span>
    </div>
  `,
  styleUrl: './sidebar-entry.component.css',
})
export class SidebarEntryComponent {
  @Input() name!: string;
  @Input() count!: number;

  constructor(private router: Router) {}

  goToShelf() {
    this.router.navigate(['/s', this.name])
  }
}
