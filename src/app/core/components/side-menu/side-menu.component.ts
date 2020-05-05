import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UiService } from 'src/app/core/services/ui.service';

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

  onLinkClick(url: string) {
    this.router.navigate([url]);
  }
}
