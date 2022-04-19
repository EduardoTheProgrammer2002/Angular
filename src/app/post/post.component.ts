import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input('img') postImg = '';
  test: string = 'This is a relationship from child to parent'; 

  @Output() imgSelected = new EventEmitter<string>();
}
