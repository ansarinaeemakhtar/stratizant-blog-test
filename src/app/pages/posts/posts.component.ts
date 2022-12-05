import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  constructor (private _data: DataService) {}

  posts: any;
  ngOnInit(): void {
    this._data.getData().subscribe((result: any) => {
      this.posts = result;
    });
  }

}
