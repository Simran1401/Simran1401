import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpServicesService } from '../services/http-services.service';
import { singleBlogService } from '../services/singleBlog';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.css']
})
export class SingleBlogComponent implements OnInit {

  constructor(private http: HttpServicesService, private route: ActivatedRoute, private singleBlogServ: singleBlogService) { }

  id;

  singleBlog

  apiUrl = environment.apiUrl;

  bLogList;

  likedOnes;

  baseUrl = environment.apiUrl

  ngOnInit() {
    this.route.url.subscribe(res => {
      this.id = res[1].path
    })
    console.log(this.route.url);

    this.singleBlogServ.onAddToBlog.subscribe( () => {
      try {
        if (localStorage.getItem('likedBlog')) {
         this.likedOnes = JSON.parse(localStorage.getItem('likedBlog'))
        } else {
          this.likedOnes = false
        }

      } catch { }

    })

    this.http.singleBlog("/jv-scan/api/detail_blog/?blog_id=" + `${this.id}`).subscribe(res => {
      this.singleBlog = res

    })

    this.getBlog()

  }

  getBlog() {
    this.http.blogList('/jv-scan/api/blogs/').subscribe(res => {

      this.bLogList = res;

    })
  }

  addToList(blg) {
    this.singleBlogServ.addToLikedBlog(blg)
  }

  removeBlog(blg) {
    this.singleBlogServ.removeItemFromList(blg)
  }

}
