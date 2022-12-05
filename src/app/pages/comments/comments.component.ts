import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  constructor (private _data: DataService) {}

  comments: any;
  totalComments: any;
  p: number = 1;
  ngOnInit(): void {
    this._data.getComments().subscribe((result: any) => {
      this.comments = result;
      this.totalComments = result.length;
    });
  }
}
