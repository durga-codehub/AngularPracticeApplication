import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-event-delegation',
  standalone: true,
  imports: [],
  templateUrl: './event-delegation.component.html',
  styleUrl: './event-delegation.component.scss',
  encapsulation:ViewEncapsulation.None
})
export class EventDelegationComponent {
  gridClicked(event:any){
if(event.target.classList.contains('grid-box')){
  event.target.classList.toggle('grid-box-selected')
}
  }
createBox(){
  let boxDivs = document.getElementsByClassName('grid-box');
  if(boxDivs.length === 18){
    alert('Box length Exceeded!')
  }
  else{
let newDiv = document.createElement('div');
newDiv.className = 'grid-box'
let gridContainer =  document.getElementById('grid-container');
gridContainer?.append(newDiv)
  }

}
removeBox(){
   let boxDivs = document.getElementsByClassName('grid-box');
  if(boxDivs.length === 0){
    alert('No Boxes to remove')
  }
  else{
let divToRemove = document.querySelector('.grid-box');
  divToRemove?.remove();
  }  
}
}
