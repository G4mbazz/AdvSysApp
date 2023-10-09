import { Component, OnInit } from '@angular/core';
import { BookModel } from '../models/book-model';
import { BookService } from 'src/services/book-service';
import { Observable } from 'rxjs';
import { NgSelectModule } from '@ng-select/ng-select/public-api';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit{
  book$!: Observable<BookModel[]>;
  selectedId = '';
  searchString = '';

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
      this.book$ = this.bookService.searchBook(this.searchString);
  }

}
