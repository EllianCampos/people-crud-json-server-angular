import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddPersonComponent } from './pages/add-person/add-person.component';
import { EditPersonComponent } from './pages/edit-person/edit-person.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'add-person',
    component: AddPersonComponent,
  },
  {
    path: 'edit-person/:id',
    component: EditPersonComponent
  }
];
