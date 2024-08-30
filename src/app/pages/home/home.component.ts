import { Component, inject } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { Person } from '../../interfaces/person';
import {MatTableModule} from '@angular/material/table'
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, ToolbarComponent, MatButtonModule, RouterModule, MatIcon],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  peopleService = inject(PeopleService)
  people:Person[] = []

  displayedColumns = ['name', 'lastname', 'age', 'actions']

  constructor() {
    this.peopleService.getPeople().subscribe({
      next: data => {
        this.people = data
      }
    })
  }

  delete(id: string) {
    this.peopleService.deletePerson(id).subscribe({
      next: () => {
        this.people = this.people.filter(x => x.id !== id)
      }
    })
  }
}
