import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  constructor(private http:Http,
    private spinner:NgxSpinnerService
    ) { }
  
  message="Naveen";
  currentPage:number;
  page:number;
  currentPageAppend = 'Parent ';
  usersList:['sdf','fff'];

  ngOnInit() {
    this.spinner.show();
    this.getRecords();
    

    /** spinner starts on init */
    // this.spinner.show();
 
    // setTimeout(() => {
    //     /** spinner ends after 5 seconds */
    //     this.spinner.hide();
    // }, 5000);
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
    if(!this.currentPage){
      this.currentPage = 1;
    }
    this.http.get('http://localhost:3000/users?_page='+this.currentPage).subscribe(
      (response)=>{
        // console.log(response);
        const data = JSON.parse(response['_body']);

        this.usersList = data;
        console.log(data);
        this.spinner.hide();
      },
      (error)=>console.log(error)
    );
    
  }

  setPage(page){
    this.currentPage = page;
    this.getRecords();
  }
  pageChanged(page) {
    if(!page){
      return;
    }
    console.log('Page changed: ' + page);
    this.setPage(page);
  }

}
