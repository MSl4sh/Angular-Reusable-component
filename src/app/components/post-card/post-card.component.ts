import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {
  @Input('postTitle') title = 'Mon titre par défaut'
  @Output() clickTitle = new EventEmitter()

  clickedTitle(){
    this.clickTitle.emit(this.title);
  }
}
