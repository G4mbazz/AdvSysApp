import { HttpClient } from "@angular/common/http";
import { BookModel } from "src/app/models/book-model";
import { Injectable } from "@angular/core";
import { Observable, delay, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class BookService{
    baseUrl = 'https://localhost:7177/api/book/all'
    searchUrl = 'https://localhost:7177/api/book/search/'
    deleteUrl = 'https://localhost:7177/api/book/delete/'
    updateUrl = 'https://localhost:7177/api/book/update/'
    createUrl = 'https://localhost:7177/api/book/create'
    constructor(private http:HttpClient){

    }

    getAllBooks():Observable<any>{
        return this.http.get<any[]>(this.baseUrl)
    }

    searchBook(query:string):Observable<any[]>{
        return this.http.get<BookModel[]>(this.searchUrl + query)
    }
    deleteBook(id:string):Observable<BookModel>{
        return this.http.delete<BookModel>(this.deleteUrl + id)
    }
    updateBook(book:BookModel):Observable<BookModel>{
        return this.http.put<BookModel>(this.updateUrl + book.id, book)
    }
    createBook(Book:BookModel){
        return this.http.post<BookModel>(this.createUrl, Book)
    }
}