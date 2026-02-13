import { Component, OnInit, inject } from '@angular/core';
import { SharedService } from '../../shared.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crud-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crud-demo.component.html',
  styleUrl: './crud-demo.component.scss'
})
export class CrudDemoComponent implements OnInit{

common = inject(SharedService)
url="assets/mock.json"
data:any;
postDataObj = {
  "name":"Meena Karmegam",
  "id":12,
  "city":"Chennai"
  }


ngOnInit(): void {
  //Get operation
 
  this.common.postUser(this.postDataObj).subscribe(d=>console.log(d)) // it wont update this mock json, just to understand the post concept
  this.common.getUser().subscribe(d=>this.data = d)
}
}
