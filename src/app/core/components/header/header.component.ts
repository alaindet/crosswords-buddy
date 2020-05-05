import { Component } from '@angular/core';

import { UiService } from 'src/app/core/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    public ui: UiService,
  ) {}

  onToggleMenu() {
    this.ui.toggleMenu();
  }
}
