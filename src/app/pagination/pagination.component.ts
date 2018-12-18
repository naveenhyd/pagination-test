import { Component, OnInit, Output, EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  constructor() { }

  message = "Hello world";
  @Output() messageEvent = new EventEmitter<string>();
  @Output() goNext = new EventEmitter<boolean>();
  @Output() goPrev = new EventEmitter<boolean>();

  @Input() currentParentPage:number;

  ngOnInit() {
  }

  sendMessage(){
    this.messageEvent.emit(this.message);
  }

  goPrevPage(){
    this.goPrev.emit(true);
  }
  goNextPage(){
    this.goNext.emit();
  }

}
