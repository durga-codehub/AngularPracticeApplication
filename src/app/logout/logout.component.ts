import { Component, inject } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent {
common = inject(SharedService)
router = inject(Router)
  onLogout(){
    this.common.loginSuccess = false;
this.router.navigate([''])
  }
}
