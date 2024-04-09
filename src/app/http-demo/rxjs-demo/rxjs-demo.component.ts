import { DOCUMENT } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { concatMap, fromEvent, interval, mergeMap, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-rxjs-demo',
  standalone: true,
  imports: [],
  templateUrl: './rxjs-demo.component.html',
  styleUrl: './rxjs-demo.component.scss'
})
export class RxjsDemoComponent implements OnInit {

  document = inject(DOCUMENT)
  ngOnInit(){
const switchClick = fromEvent(this.document.getElementById('btn-switch') as HTMLElement, 'click')
 const concatClick = fromEvent(this.document.getElementById('btn-concat') as HTMLElement, 'click')
 const mergeClick = fromEvent(this.document.getElementById('btn-merge') as HTMLElement, 'click')

switchClick.pipe(switchMap(ev=>interval(500).pipe(take(3)))).subscribe(s=>console.log(s))
 concatClick.pipe(concatMap(ev=>interval(500).pipe(take(3)))).subscribe(c=>console.log(c))
 mergeClick.pipe(mergeMap(ev=>interval(500).pipe(take(3)))).subscribe(m=>console.log(m))
  }
}
