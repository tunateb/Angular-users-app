import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  user = {}

  id: number;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.usersService.getUser(+id).subscribe((user) => (this.user = user));
  }

  submitHandler(userData) {
    this.user = userData
    this.id = userData.id
    this.usersService.updateUser(this.user, this.id)
  }
}
