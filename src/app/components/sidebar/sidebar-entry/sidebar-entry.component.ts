import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar-entry',
  imports: [],
  templateUrl: './sidebar-entry.component.html',
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
