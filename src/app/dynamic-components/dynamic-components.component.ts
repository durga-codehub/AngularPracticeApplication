import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { CommonModule } from '@angular/common';
import { ListOfContentsComponent } from '../http-demo/list-of-contents/list-of-contents.component';

@Component({
  selector: 'app-dynamic-components',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dynamic-components.component.html',
  styleUrl: './dynamic-components.component.scss'
})
export class DynamicComponentsComponent implements OnInit{
  ngOnInit(): void {
    this.myDynamicComponent=HomeComponent;
  }
  myDynamicComponent:any;

  setComponent(comp:string){
    if(comp ==='home')
this.myDynamicComponent=HomeComponent;
    else
    this.myDynamicComponent = ListOfContentsComponent
  }

}
