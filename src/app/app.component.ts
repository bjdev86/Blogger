import { Component } from '@angular/core';
import { BlogChannelService } from './services/blogchannel.service';
import { BlogpostComponent } from './blogpost/blogpost.component';

@Component({
  moduleId: 'main',
  selector: 'app-root',
  templateUrl: "app.component.html",
  styleUrls: ['./app.component.scss'],
  providers: [BlogChannelService]
})
export class AppComponent
{
  // Public Data Members
  title = 'Blogger';

  // Class constructor
  constructor(private blogChannel: BlogChannelService)
  {
    // this.blogChannel.getAllBlogPosts();
  }


}
