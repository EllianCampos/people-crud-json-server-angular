import { Component, inject } from '@angular/core';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Person } from '../../interfaces/person';


import { PeopleService } from '../../services/people.service';
import { Router } from '@angular/router';
import { PersonFormComponent } from "../../components/person-form/person-form.component";

@Component({
  selector: 'app-add-person',
  standalone: true,
  imports: [
    ToolbarComponent,
    PersonFormComponent
],
  templateUrl: './add-person.component.html',
  styleUrl: './add-person.component.css',
})
export class AddPersonComponent {
  peopleService = inject(PeopleService)
  router = inject(Router)
  
  addPerson(person: Person) {
    this.peopleService.createPerson(person).subscribe({
      next: () => {
        this.router.navigate([''])
      }
    })
  }
}
