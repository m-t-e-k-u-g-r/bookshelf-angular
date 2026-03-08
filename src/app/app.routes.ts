import { Routes } from '@angular/router';
import {ShelfComponent} from './components/shelf/shelf.component';

export const routes: Routes = [
  { path: '', component: ShelfComponent },
  { path: 's/:shelfId', component: ShelfComponent }
];
