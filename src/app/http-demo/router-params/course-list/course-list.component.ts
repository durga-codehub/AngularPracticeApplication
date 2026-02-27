import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SharedService } from '../../../shared.service';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})
export class CourseListComponent {
 common = inject(SharedService)
courseData = this.common.courseData;

}
