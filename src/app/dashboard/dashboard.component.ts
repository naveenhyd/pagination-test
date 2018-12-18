import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  constructor(private http:Http) { }
  
  message="Naveen";
  currentPage = 1;
  currentPageAppend = 'Parent ';
  usersList:['sdf','fff'];

  ngOnInit() {
    this.getRecords();
  }
  

  receiveMessage($event){
    this.message = $event;
  }
  receiveNextPage(){
    this.currentPage= this.currentPage+1;
    this.currentPageAppend = this.currentPageAppend+' - '+this.currentPage;
    this.getRecords();
  }

  receivePrevPage(){
    this.currentPage= this.currentPage-1;
    this.currentPageAppend = this.currentPageAppend+' - '+this.currentPage;
    this.getRecords();
  }

  getRecords(){
    this.http.get('http://localhost:3000/users?_page='+this.currentPage).subscribe(
      (response)=>{
        console.log(response);
        const data = JSON.parse(response['_body']);

        this.usersList = data;
        console.log(data);
      },
      (error)=>console.log(error)
    );
    
  }

}
