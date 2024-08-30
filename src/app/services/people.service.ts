import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../interfaces/person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private apiUrl = 'http://localhost:3000'

  constructor(private http:HttpClient) { }

  getPeople() {
    return this.http.get<Person[]>(`${this.apiUrl}/people`)
  }

  getPersonById(id: string) {
    return this.http.get<Person>(`${this.apiUrl}/people/${id}`)
  }

  createPerson(person: Person) {
    return this.http.post<Person>(`${this.apiUrl}/people`, person)
  }

  updatePerson(person: Person) {
    return this.http.put(`${this.apiUrl}/people/${person.id}`, person)
  }

  deletePerson(id: string) {
    return this.http.delete(`${this.apiUrl}/people/${id}`)
  }
}
