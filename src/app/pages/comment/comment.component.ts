import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  private routeSub!: Subscription;
  comment: any;
  constructor (private _route: ActivatedRoute, private _data: DataService) {}

  ngOnInit(): void {
    this.routeSub = this._route.params.subscribe( params => {
      this._data.getComments(params['id']).subscribe((result: any) => {
        this.comment = result;
      })
    })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
