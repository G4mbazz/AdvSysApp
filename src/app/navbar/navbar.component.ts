import { Component } from '@angular/core';
import { BookModel } from '../models/book-model';
import { BookService } from 'src/services/book-service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private bookService: BookService){

  }
  books: BookModel[]=[];
  searchText:string = ''
  searchInput:string = ''

  getAllBooks(){
    this.bookService.getAllBooks().subscribe(Response => {
      this.books = Response
  })
  }
}
