import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(`${this.baseUrl}/users`);
  }

  getUser(id: number) {
    return this.http.get(`${this.baseUrl}/users/${id}`);
  }

  createUser(user: object) {
    this.http
      .post(`${this.baseUrl}/users`, user)
      .subscribe((response) => console.log(response));
  }
}
