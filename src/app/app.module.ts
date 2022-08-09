import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatatableComponent } from './datatable/datatable.component';
import { MatTableModule } from '@angular/material/table';import { MatPaginatorModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,MatInputModule,
    BrowserAnimationsModule,MatTableModule,MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
