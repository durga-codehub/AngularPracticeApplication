import { Component, inject } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';
import { SharedService } from '../shared.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HighlightDirective,CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  color:string =''
  rangeVal:number =10;

  common = inject(SharedService)

  
  OnInputRangeChange(){
let pieElem =document.getElementById('piechart')
if(pieElem){
  pieElem.style.backgroundImage = `conic-gradient(green ${this.rangeVal}%,lightgreen 0)`
}
  }
  changeColor(color:string){
    this.color=color
    
  }
}
