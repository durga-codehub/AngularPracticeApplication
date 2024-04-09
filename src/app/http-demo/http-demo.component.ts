import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { SharedService } from '../shared.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-http-demo',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './http-demo.component.html',
  styleUrl: './http-demo.component.scss'
})
export class HttpDemoComponent{

  
}

