import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';
export interface USERS {
    id: Number;
    type: String;
}

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {
 private _jsonURL = 'assets/data.json';
  displayedColumns: string[] = ['id','type','links','relationships'];
  @ViewChild(MatPaginator,{static:false}) paginator: MatPaginator;
dataSource;
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
 Users: USERS[];
  constructor(private http: HttpClient) {
      this.getJSON().subscribe(data => {
    this.Users=data.data;
console.log(this.Users)
 this.dataSource = new MatTableDataSource<USERS>(this.Users);
     this.dataSource.paginator = this.paginator;
   });
  
   }

 ngOnInit() {

  }

   public getJSON(): Observable<any> {
   return this.http.get(this._jsonURL);
 }
}
