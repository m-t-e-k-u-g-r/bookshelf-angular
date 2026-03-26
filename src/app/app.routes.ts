import { Routes } from '@angular/router';
import {ShelfComponent} from './components/shelf/shelf.component';
import {NotFoundComponent} from './components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: ShelfComponent },
  { path: 's/:shelfId', component: ShelfComponent },
  { path: '**', component: NotFoundComponent }
];
