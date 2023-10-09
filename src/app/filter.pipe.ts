
import { Pipe, PipeTransform } from '@angular/core';
import { BookModel } from './models/book-model';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param items list of elements to search in
   * @param searchText search string
   * @returns list of elements filtered by search text or []
   */
transform(books: BookModel[], searchText: string): any[] {
    if (!books) {
    return [];
    }
    if (!searchText) {
    return books;
    }
    searchText = searchText.toLocaleLowerCase();

    return books.filter(it => {
        return it.title.toLocaleLowerCase().includes(searchText) || it.genre.toLocaleLowerCase().includes(searchText) || it.author.toLocaleLowerCase().includes(searchText)
    })
    }
}