import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {

  http = inject(HttpClient)
  inLoginPage: boolean = true;
  

  constructor() { }
  loginCred =[
    {
      username:'Durga Kannan',
      password:'Durga@123',
      role:'client'
    },
    {
      username:'Administrator',
      password:'ImAdmin@123',
      role:'admin'
    }
  ]
  courseData:any=[
  {
    name:'Angular',
    id:'an123_2026',
    price:'$200'
  },
   {
    name:'React',
    id:'re87_2025',
    price:'$180'
  },
   {
    name:'Javascript',
    id:'js59_2026',
    price:'$220'
  },
   {
    name:'Typescript',
    id:'ts38_2026',
    price:'$190'
  },
   {
    name:'HTML/CSS',
    id:'hc65_2025',
    price:'$150'
  },
    {
    name:'Tailwind',
    id:'tw86_2026',
    price:'$200'
  }
]
  courseDetails:any=[
  {
    name:'Angular',
    id:'an123_2026',
    price:'$200',
    content:"This Angular course is designed to take developers from understanding the basics of the framework to building, testing, and deploying complex, enterprise-grade single-page applications (SPAs). These courses generally cover modern Angular versions (v17+), utilizing TypeScript, standalone components, and signals. "
  },
   {
    name:'React',
    id:'re87_2025',
    price:'$180',
    content:"This React course provides a comprehensive, project-based curriculum designed to take developers from foundational concepts to building dynamic, single-page applications. Key topics include components, JSX, state management (Hooks/Redux), routing, and API integration, often culminating in a portfolio-ready project. These courses are typically 8–10 weeks long and focus on modern frontend development."
  },
   {
    name:'Javascript',
    id:'js59_2026',
    price:'$220',
    content:"This JavaScript course typically provides a solid foundation for building dynamic, interactive web applications by covering core programming concepts, DOM manipulation, and asynchronous programming. It is a versatile, in-demand language essential for front-end, back-end (with Node.js), and full-stack development."
  },
   {
    name:'Typescript',
    id:'ts38_2026',
    price:'$190',
    content:"TypeScript course description outlines a curriculum designed to teach developers how to use TypeScript, a statically typed superset of JavaScript that enhances code quality, maintainability, and scalability for large-scale applications."
  },
   {
    name:'HTML/CSS',
    id:'hc65_2025',
    price:'$150',
    content:"HTML/CSS course teaches the foundational technologies for building and styling web pages. The curriculum typically starts with basic concepts and progresses to building responsive and professional-looking websites. "
  },
    {
    name:'Tailwind',
    id:'tw86_2026',
    price:'$200',
    content:"Tailwind CSS courses provide a comprehensive, utility-first approach to modern web development, enabling learners to build fast, responsive, and custom interfaces directly in HTML. Programs typically cover setup, layout, styling, and configuration, often featuring hands-on projects, such as building landing pages, to create modern, production-ready web applications."
  }
]

  userRole ='client'

  loginSuccess:boolean = false;

  getUser():Observable<any>{
    return this.http.get('assets/mock.json')
  }
  postUser(data:any){
    return this.http.post('assets/mock.json',data)
  }
}


