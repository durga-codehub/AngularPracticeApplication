import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpDemoComponent } from './http-demo/http-demo.component';
import { canActivateGuardGuard } from './can-activate-guard.guard';

export const routes: Routes = [
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'home',
        component:HomeComponent,
        canActivate:[canActivateGuardGuard]
    },
    {
        path:'http',
        //component:HttpDemoComponent, // eagerly Loaded
        loadComponent:()=> import('./http-demo/http-demo.component').then(c=>c.HttpDemoComponent), // Lazily loaded
        canActivate:[canActivateGuardGuard],
        children:[
            {
                path:'loc',
                loadComponent:()=>import('./http-demo/list-of-contents/list-of-contents.component').then(c=>c.ListOfContentsComponent)
            },
            {
                path:'crud',
                loadComponent:()=> import('./http-demo/crud-demo/crud-demo.component').then(c=>c.CrudDemoComponent),
                canActivate:[canActivateGuardGuard]
            },
            {
                path:'interceptor',
                loadComponent: ()=> import('./http-demo/interceptor-demo/interceptor-demo.component').then(c=>c.InterceptorDemoComponent),
                canActivate:[canActivateGuardGuard]
            },
            {
                path:'observable',
                loadComponent:()=>import('./http-demo/observable-demo/observable-demo.component').then(c=>c.ObservableDemoComponent),
                canActivate:[canActivateGuardGuard]
            },
            {
                path:'rxjs',
                loadComponent:()=>import('./http-demo/rxjs-demo/rxjs-demo.component').then(c=>c.RxjsDemoComponent),
                canActivate:[canActivateGuardGuard]
            },
            {
                path:'signal',
                loadComponent:()=>import('./http-demo/signal-demo/signal-demo.component').then(c=>c.SignalDemoComponent)
            },
            {
                path:'',
                redirectTo:'loc',
                pathMatch:'full'
            }
        ]
    },
    {
        path:'dynamic_components',
       loadComponent:()=>import('./dynamic-components/dynamic-components.component').then(c=>c.DynamicComponentsComponent),
       canActivate:[canActivateGuardGuard]
        
    },
    {
        path:'**',
        redirectTo:'login',
        pathMatch:'full'
        
    }
];
