
import { Comment } from './comment.modelo';
import { Injectable } from '@angular/core';
import { Observable, from, pipe, fromEvent } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class CommentService {

  constructor(private httpClient: HttpClient) {

  }

  getComments() : Observable<Comment[]>{
   return this.httpClient.get<Comment[]>('https://jsonplaceholder.typicode.com/comments').
      pipe(map(response => { return response; }));
  }

}
