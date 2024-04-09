import { Component, Signal, WritableSignal, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal-demo',
  standalone: true,
  imports: [],
  templateUrl: './signal-demo.component.html',
  styleUrl: './signal-demo.component.scss'
})
export class SignalDemoComponent {
count:WritableSignal<number>= signal<number>(0);
double:Signal<number> =computed<number>(()=>this.count()*2)

increment(){
this.count.update(c=>c+1)
}
updateTofour(){
  this.count.set(4)
}
}
