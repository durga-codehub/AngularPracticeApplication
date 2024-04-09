import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  standalone: true,
  imports: [],
  templateUrl: './observable-demo.component.html',
  styleUrl: './observable-demo.component.scss'
})
export class ObservableDemoComponent implements OnInit{
  obsVal:any;
  subjVal:any;
  obsVal2:any;
  subjVal2:any;
  myObs = new Observable(obs=> {
    obs.next((Math.random()*10).toFixed())
    
  })
  mysubj = new Subject()
ngOnInit(){


}
subscribeObs(){
  this.myObs.subscribe(s=>this.obsVal=s)
  this.myObs.subscribe(s=>this.obsVal2=s)//unicast by nature
}
subscribesubj(){
  this.mysubj.subscribe(s=>this.subjVal = s)
  this.mysubj.subscribe(s=>this.subjVal2 = s)
this.mysubj.next((Math.random()*10).toFixed())//multicast by nature

  
}
}
