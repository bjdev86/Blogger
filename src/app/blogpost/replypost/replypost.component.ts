import { Component, OnInit } from '@angular/core';

@Component(
{
  selector: 'app-replypost',
  template: `
    <p>
      replypost works!
    </p>
  `,
  styleUrls: ['./replypost.component.scss']
})
export class ReplypostComponent implements OnInit
{
  public replyPost: Record<string, string>;

  ngOnInit(): void
  {

  }

  constructor()
  {
    this.replyPost = {};
  }
}
