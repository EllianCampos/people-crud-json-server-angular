import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Person } from '../../interfaces/person';
import { v4 as uuid } from 'uuid'

@Component({
  selector: 'app-person-form',
  standalone: true,
  imports: [MatFormFieldModule, 
    MatInput, 
    MatButtonModule,
    ReactiveFormsModule],
  templateUrl: './person-form.component.html',
  styleUrl: './person-form.component.css'
})
export class PersonFormComponent {
  @Input() data: Person | undefined
  @Output() handleSubmit = new EventEmitter<Person>()

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    age: new FormControl(0, Validators.required)
  });

  ngOnChanges() {
    if (this.data != undefined) {
      this.form.patchValue(this.data)
    }
  }

  submit() {
    if (!this.form.valid) return

    const newPerson:Person = {
      id: this.data === undefined ? uuid() : this.data.id,
      name:  this.form.value.name ?? '',
      lastname: this.form.value.lastname ?? '',
      age: this.form.value.age ?? 0
    }

    this.handleSubmit.emit(newPerson)
  }
}
