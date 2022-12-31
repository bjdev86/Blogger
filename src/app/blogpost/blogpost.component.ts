/**
 * @author Ben Miller
 * @date 12/29/2022
 *
 * @description Component to manage and host the original blog post along with
 * any reply chains and comment editor. This component is the parent component
 * of this application and hots the blog reply component and reply editor
 * component as child components.
 */
import { Component, OnInit } from '@angular/core';
import { BlogChannelService } from '../services/blogchannel.service';

@Component(
{
  selector: 'blogpost',
  templateUrl: 'blogpost.html',
  styleUrls: ['./blogpost.component.scss'],
  providers: [BlogChannelService]
})
export class BlogpostComponent implements OnInit
{
  // Class Member Declaration
  public blogPost: string;
  public topLevelReplies: Record<string, string>[];

  // Life cycle functoins
  ngOnInit(): void
  {
    // Retrieve the blogPost and its replies from the blogger API

    // Parse blogPost from replies

  }

  // Class constructor
  constructor(blogChannel: BlogChannelService)
  {
    // Intialize public data members
    this.blogPost = "";
    this.topLevelReplies = [];
  }

  // Function to issue a post to the API
  public submitPost(post: string): void
  {

  }
}
