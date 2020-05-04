import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public title: string;

  constructor(
    private titleService: Title
  ) {}

  ngOnInit(){
    this.title = this.titleService.getTitle();
  }

}
