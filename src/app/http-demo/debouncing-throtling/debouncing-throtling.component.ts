import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { debounceTime, Subject, throttleTime } from 'rxjs';

@Component({
  selector: 'app-debouncing-throtling',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './debouncing-throtling.component.html',
  styleUrl: './debouncing-throtling.component.scss'
})
export class DebouncingThrotlingComponent {
srchTxt = '';
dummyTxt = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
debouncedSrchSubject$ = new Subject()
throttledScrollSunject$ = new Subject();
throttledScroll = this.myThrottling(()=>{this.dummyTxt+="I'am newly added line"},500)
debouncedSrch = this.myDebounce(()=>{alert(`Search text is ${this.srchTxt}`)},800)
ngOnInit(){
  this.debouncedSrchSubject$
  .pipe(debounceTime(800))
  .subscribe(s=> alert(`Search text is ${s}`))
this.throttledScrollSunject$
.pipe(throttleTime(500))
.subscribe(s=>this.dummyTxt+=s)
}
onSearch(){
// this.debouncedSrch(); // vannila javascript method
this.debouncedSrchSubject$.next(this.srchTxt) // RXJS method

}
onScroll(){
  //this.throttledScroll(); // vannila javascript method
  this.throttledScrollSunject$.next("I'am newly added line")
}
myThrottling(cb:Function,delay:number){
let last = 0;
return function(...args:any){
let now = new Date().getTime();
if(now-last < delay) return;
last = now;
return cb(...args);
}
}

myDebounce(cb:Function,delay:number){
let timer:any;
return function(...args:any){
  if(timer) clearTimeout(timer)
timer = setTimeout(() => {
  cb(...args)
}, delay);
}
}

}
