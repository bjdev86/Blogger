import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogChannelService } from './services/blogchannel.service';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { ReplypostComponent } from './blogpost/replypost/replypost.component';
import { ReplyeditorComponent } from './blogpost/replyeditor/replyeditor.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogpostComponent,
    ReplypostComponent,
    ReplyeditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BlogChannelService],
  bootstrap: [AppComponent, BlogChannelService]
})
export class AppModule { }
