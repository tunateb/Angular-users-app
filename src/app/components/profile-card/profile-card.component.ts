import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css'],
})
export class ProfileCardComponent implements OnInit {
  @Input() user;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToProfile(id: number) {
    this.router.navigateByUrl(`/users/${id}`);
  }
}
