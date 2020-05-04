import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { UiService } from 'src/app/core/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public title: string;

  constructor(
    public ui: UiService,
    private titleService: Title,
  ) {}

  ngOnInit(){
    this.title = this.titleService.getTitle();
  }

  onToggleMenu() {
    this.ui.toggleMenu();
  }
}
