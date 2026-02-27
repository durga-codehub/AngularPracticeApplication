import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SharedService } from '../../../shared.service';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss'
})
export class CourseDetailsComponent {
constructor(private activeRoute: ActivatedRoute){}
course:any
ngOnInit(){
  this.activeRoute.data.subscribe(({courseData})=>this.course = courseData)
console.log(this.course)
}

}
