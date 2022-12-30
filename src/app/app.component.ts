/**
 * Design inspiration: https://www.apartmenttherapy.com/moving-back-in-with-parents-essay-37172762?spot_im_redirect_source=pitc
 */
import { Component } from '@angular/core';
import { BlogpostComponent } from './blogpost/blogpost.component';

@Component({
  moduleId: 'main',
  selector: 'app-root',
  templateUrl: "app.component.html",
  styleUrls: ['./app.component.scss']
})
export class AppComponent
{
  // Public Data Members
  title = 'Blogger';

  // Class constructor
  constructor()
  {
    // this.blogChannel.getAllBlogPosts();
  }


}
