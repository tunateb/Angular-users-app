import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  form = {
    name: '',
    username: '',
    email: '',
  };

  constructor(private usersService: UsersService) {}

  ngOnInit(): void { }
  
  submit() {
    this.usersService.createUser(this.form);
  }
}
