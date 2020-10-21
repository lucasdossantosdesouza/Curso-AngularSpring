import { CommentService } from './comment.service';
import { Component, OnInit } from '@angular/core';
import { Comment } from './comment.modelo';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: Comment[];
  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentService.getComments().subscribe(comments => this.comments = comments);
  }

}
