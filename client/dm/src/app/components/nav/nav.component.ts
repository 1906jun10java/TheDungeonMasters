import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input()
  links: {};

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit() {}

  logout() {
    this.authService.currentUser = null;
    this.authService.isLoggedIn = false;
    sessionStorage.clear();
    window.location.replace('/login');
  }
}
