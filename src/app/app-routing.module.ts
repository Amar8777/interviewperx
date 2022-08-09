import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DatatableComponent } from './datatable/datatable.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  
];

@NgModule({

  imports: [
    RouterModule.forRoot([
      { path: 'dashboard', component: DatatableComponent },
       { path: 'login', component: LoginComponent },
      { path: '**', redirectTo: 'login' }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
