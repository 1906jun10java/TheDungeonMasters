import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit() {}

  logout() {
    this.authService.isLoggedIn = false;
    this.authService.currentUser = null;
    sessionStorage.clear();
    window.location.replace('/login');
  }
}
