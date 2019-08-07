import {Component, Input, OnInit, ViewChildren} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input()
  links: {};

  constructor(
    private authService: AuthService, 
    private modalService: ModalService
  ) {}

  ngOnInit() {}

  logout() {
    this.authService.currentUser = null;
    this.authService.isLoggedIn = false;
    sessionStorage.clear();
    window.location.replace('/login');
  }

  showMonsterModal(){
    this.modalService.toggleMonsterModal();
  }
}
