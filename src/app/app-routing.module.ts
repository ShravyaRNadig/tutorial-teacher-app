import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LayoutComponent } from './shared/layout/layout.component';


const routes: Routes = [
  
  {
    path:'',
    component: LayoutComponent,
    children:[      
      {
        path: '',
        loadChildren: ()=> import('./features/components/components.module').then((m)=>m.ComponentsModule)
      }
    ]
  },
  {
    path: 'home',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
