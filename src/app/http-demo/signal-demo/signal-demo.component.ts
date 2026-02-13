import { Component, Signal, WritableSignal, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal-demo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signal-demo.component.html',
  styleUrl: './signal-demo.component.scss'
})
export class SignalDemoComponent {
count:WritableSignal<number>= signal<number>(0);
double:Signal<number> =computed<number>(()=>this.count()*2)
width = 5
length=10;
area = this.width*this.length;
signalLength = signal<number>(5);
signalWidth = signal<number>(10);
areaWithSignal = computed<number>(()=>this.signalLength()*this.signalWidth())

increment(){
this.count.update(c=>c+1)
}
updateTofour(){
  this.count.set(4)
}
}
