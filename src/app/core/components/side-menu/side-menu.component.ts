import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UiService } from 'src/app/core/services/ui.service';

interface Link {
  url: string;
  label: string;
  options?: {
    exact: boolean;
  }
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {

  constructor(
    public ui: UiService,
    private router: Router,
  ) {}

  links: Link[] = [
    { url: '/search', label: 'Search', options: { exact: false } },
    { url: '/recent', label: 'Recent', options: { exact: false } },
    { url: '/load', label: 'Load', options: { exact: false } },
  ];

  onLinkClick(url: string) {
    this.router.navigate([url]);
  }
}
