import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class singleBlogService {


  onAddToBlog = new BehaviorSubject(null)
  onremoveBlog = new BehaviorSubject(null)


  constructor() { }


  addToLikedBlog(blog) {
    let cart = {}
    if (JSON.parse(localStorage.getItem('likedBlog'))) {
      cart = JSON.parse(localStorage.getItem('likedBlog'));
      let data = {
        'id': blog.id,
      };
      cart[blog.id] = data;
    } else {
      let data = {
        'id': blog.id,
      };
      cart[blog.id] = data
    }
    localStorage.setItem('likedBlog', JSON.stringify(cart));
    this.onAddToBlog.next(null);
    this.onremoveBlog.next(null);
  }

  removeItemFromList(value) {
    let blog = JSON.parse(localStorage.getItem('likedBlog'));
    delete blog[value.id]

    localStorage.setItem('likedBlog', JSON.stringify(blog));
    this.onAddToBlog.next(null);
    this.onremoveBlog.next(null);
  }


}
