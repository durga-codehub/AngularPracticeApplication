import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { SharedService } from './shared.service';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { LogoutComponent } from './logout/logout.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule,CommonModule,BreadcrumbComponent,LogoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'preparation';

  common = inject(SharedService)
constructor(private router: Router){
this.router.events.pipe(filter(e=> e instanceof NavigationEnd))
.subscribe((e:any)=>{
  this.common.inLoginPage = e.urlAfterRedirects.startsWith('/login')
})
}
  
}
