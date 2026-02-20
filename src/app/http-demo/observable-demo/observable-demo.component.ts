import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

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
myObs = new Observable(obs=>{
  obs.next((Math.random()*10).toFixed())
})
mySub = new Subject();
subjectExample = new Subject();
b_subjectExample = new BehaviorSubject(9999);
r_subjectExample = new ReplaySubject();
subjResult:any;
selectedSub:any = this.subjectExample;
selectedSubName:any = 'Subject';
ngOnInit(){


}
subscribeObs(){
  this.myObs.subscribe(a=>this.obsVal = a)
   this.myObs.subscribe(a=>this.obsVal2 = a)
}
subscribesubj(){
  
  this.mySub.subscribe(s=>this.subjVal = s)
  this.mySub.subscribe(s=>this.subjVal2 = s)
  this.mySub.next((Math.random()*10).toFixed())
}
onEmit(subj: any){
  console.log('Emitted')
subj.next(1)
console.log('Emitting ',1)
setTimeout(() => {
 subj.next(2)
 console.log('Emitting ',2)
}, 1000);
setTimeout(() => {
 subj.next(3)
 console.log('Emitting ',3)
}, 2000);
setTimeout(() => {
 subj.next(4)
 console.log('Emitting ',4)
}, 3000);
setTimeout(() => {
 subj.next(5)
 console.log('Emitting ',5)
}, 4000);
}
onSubscribe(subj:any){
  console.log('Subscribed')
subj.subscribe((s:any)=> {
  console.log('Subscribed ',s)
  this.subjResult = s})
}
subjectSelection(sub:any,name:string){
this.selectedSub = sub
this.selectedSubName = name
}
}
