import { Component } from '@angular/core';
import { BookModel } from '../models/book-model';
import { BookService } from 'src/services/book-service';
import { FormBuilder, FormGroup, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  books: BookModel[] = [];
  searchText:string = ''
  searchInput:string = ''
  formTitle:string = "Create/Edit book";
  form: FormGroup
  pageTitle = "Edit"
  book: BookModel = {
    id:'',
    title:'',
    author:'',
    genre:'',
    description:'',
    publishingYear:'',
    stock:''

}
constructor(private bookService: BookService, builder: FormBuilder){
  this.form = builder.group({
    id:'',
    title:'',
    author:'',
    genre:'',
    description:'',
    publishingYear:'',
    stock:'',
    img:''
  })
}

ngOnInit():void{
  this.getAllBooks()
}
formReset(){
  this.book = {
    id:'',
    title:'',
    author:'',
    genre:'',
    description:'',
    publishingYear:'',
    stock:'',
  }
}

reset(){
  this.book = <BookModel>{}
  this.formReset()
}


onSubmit(){
  if(this.book.id == ''){
    this.bookService.createBook(this.book).subscribe(response => {
      this.getAllBooks()
      this.book = {
        id:'',
        title:'',
        author:'',
        genre:'',
        description:'',
        publishingYear:'',
        stock:''
      }
    })
  }
  else{
    this.updateBook(this.book)
  }
}
getAllBooks(){
  this.bookService.getAllBooks().subscribe(Response => {
    this.books = Response.result
  })
}
deleteBook(id:string){
  this.bookService.deleteBook(id).subscribe( Response => {
    this.getAllBooks
  })
}
updateBook(book:BookModel){
    this.bookService.updateBook(this.book).subscribe(Response => {
      this.getAllBooks()
    })
}
populateForm(book:BookModel){
  this.book = book
}
}
