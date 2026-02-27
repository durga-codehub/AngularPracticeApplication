import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { canActivateGuard } from './can-activate-guard.guard';
import { courseResolver } from './course.resolver';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [canActivateGuard]
    },
    {
        path: 'http',
        //component:HttpDemoComponent, // eagerly Loaded
        loadComponent: () => import('./http-demo/http-demo.component').then(c => c.HttpDemoComponent), // Lazily loaded
        canActivate: [canActivateGuard],
        children: [
            {
                path: 'loc',
                loadComponent: () => import('./http-demo/list-of-contents/list-of-contents.component').then(c => c.ListOfContentsComponent),
                canActivate: [canActivateGuard]
            },
            {
                path: 'crud',
                loadComponent: () => import('./http-demo/crud-demo/crud-demo.component').then(c => c.CrudDemoComponent),
                canActivate: [canActivateGuard]
            },
            {
                path: 'interceptor',
                loadComponent: () => import('./http-demo/interceptor-demo/interceptor-demo.component').then(c => c.InterceptorDemoComponent),
                canActivate: [canActivateGuard]
            },
            {
                path: 'observable',
                loadComponent: () => import('./http-demo/observable-demo/observable-demo.component').then(c => c.ObservableDemoComponent),
                canActivate: [canActivateGuard]
            },
            {
                path: 'rxjs',
                loadComponent: () => import('./http-demo/rxjs-demo/rxjs-demo.component').then(c => c.RxjsDemoComponent),
                canActivate: [canActivateGuard]
            },
            {
                path: 'signal',
                loadComponent: () => import('./http-demo/signal-demo/signal-demo.component').then(c => c.SignalDemoComponent),
                canActivate: [canActivateGuard]
            },
            {
                path: 'debouncing-throtling',
                loadComponent: () => import('./http-demo/debouncing-throtling/debouncing-throtling.component').then(c => c.DebouncingThrotlingComponent),
                canActivate: [canActivateGuard]
            },
            {
                path: 'router-params',
                loadComponent: () => import('./http-demo/router-params/router-params.component').then(c => c.RouterParamsComponent),
                canActivate: [canActivateGuard],
                children: [
                    {
                        path: 'course-list',
                        loadComponent: () => import('./http-demo/router-params/course-list/course-list.component').then(c => c.CourseListComponent),
                        canActivate: [canActivateGuard]
                    },
                    {
                        path: 'course-details/:id',
                        loadComponent: () => import('./http-demo/router-params/course-details/course-details.component').then(c => c.CourseDetailsComponent),
                        canActivate: [canActivateGuard],
                        resolve:{
                            courseData:courseResolver
                        }
                    },
                    {
                        path: '',
                        redirectTo: 'course-list',
                        pathMatch: 'full'
                    }
                ]
            },

            {
                path: 'event-delegation',
                loadComponent: () => import('./http-demo/event-delegation/event-delegation.component').then(c => c.EventDelegationComponent),
                canActivate: [canActivateGuard]
            },
            {
                path: '',
                redirectTo: 'loc',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: 'dynamic_components',
        loadComponent: () => import('./dynamic-components/dynamic-components.component').then(c => c.DynamicComponentsComponent),
        canActivate: [canActivateGuard]

    },
    {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full'

    }
];
