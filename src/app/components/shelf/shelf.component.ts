import {Component, inject, OnInit, signal} from '@angular/core';
import {BookComponent} from '../book/book.component';
import {BookService} from '../../services/book.service';
import {ShelfService} from '../../services/shelf.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-shelf',
  imports: [BookComponent],
  templateUrl: './shelf.component.html',
  styleUrl: './shelf.component.css',
})
export class ShelfComponent implements OnInit {
  bookService = inject(BookService);
  shelfService = inject(ShelfService);
  shelf = signal('Books')
  shelfId?: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.shelfId = params.get('shelfId') ?? undefined;
    })
  }
}
