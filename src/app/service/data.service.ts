import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // const params: any = new HttpParams().set('X-API-Key', '878f9490');

  constructor(private _http: HttpClient) { }

  getData (postId?: any) {
    if (postId) {
      return this._http.get(`https://my.api.mockaroo.com/blog_post?id=${postId}`, { headers: {
        'X-API-Key': '878f9490'
      } });
    }
    else {
      return this._http.get(`https://my.api.mockaroo.com/blog_post`, { headers: {
        'X-API-Key': '878f9490'
      } });
    }
  }

  getComments (commentId?: any) {
    if (commentId) {
      return this._http.get(`https://jsonplaceholder.typicode.com/comments/${commentId}`);
    }
    else {
      return this._http.get(`https://jsonplaceholder.typicode.com/comments`);
    }
  }
}
