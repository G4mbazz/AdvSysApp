import { Component } from '@angular/core';
import { BookModel } from '../models/book-model';
import { BookService } from 'src/services/book-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  books: BookModel[] = [];
  searchText:string = ''
  searchInput:string = ''

  book: BookModel = {
    id:'',
    title:'',
    author:'',
    genre:'',
    description:'',
    publishingYear:'',
    stock:''
  }
  constructor(private bookservice: BookService){

  }
  ngOnInit():void{
    this.getAllBooks();
  }
  getAllBooks(){
    this.bookservice.getAllBooks().subscribe(Response => {
      this.books = Response.result})
  }

}
