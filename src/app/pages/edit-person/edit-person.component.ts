import { Component, inject } from '@angular/core';
import { PersonFormComponent } from '../../components/person-form/person-form.component';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { Person } from '../../interfaces/person';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-edit-person',
  standalone: true,
  imports: [ToolbarComponent,
    PersonFormComponent],
  templateUrl: './edit-person.component.html',
  styleUrl: './edit-person.component.css'
})
export class EditPersonComponent {
  route = inject(ActivatedRoute)
  router = inject(Router)
  peopleService = inject(PeopleService)
  person: Person | undefined

  constructor() {
    const id = this.route.snapshot.params['id']
    this.peopleService.getPersonById(id).subscribe({
      next: (person) => {
        this.person = person
      },
      error: () => {
        this.router.navigate([''])
      }
    })
  }

  edit(person: Person) {
    this.peopleService.updatePerson(person).subscribe(() => this.router.navigate(['']))
  }
}
