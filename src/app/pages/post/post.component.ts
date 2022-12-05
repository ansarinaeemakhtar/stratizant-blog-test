import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/service/data.service';
import { BlogPost } from './Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  private routeSub!: Subscription;
  blogPost: BlogPost[] = [{
    id: '',
    title: '',
    post_content: ''
  }];
  id: number = 0;
  title: string = '';
  post_content: string = '';
 
  constructor (private _route: ActivatedRoute, private _data: DataService) {}

  ngOnInit(): void {
    this.routeSub = this._route.params.subscribe( params => {
      this._data.getData().subscribe((result: any) => {
        // this.blogPost = result;
        // this.id = result['id'];
        // this.title = result['title'];
        // this.post_content = result['post_content'];
        
        this.blogPost = result.filter((x: any) => parseInt(x['id']) === parseInt(params['id']));
        // this.title = this.blogPost.title;
        // this.post_content = this.blogPost.post_content;
      })
    })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
