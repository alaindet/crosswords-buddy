import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UiService } from 'src/app/core/services/ui.service';

@Component({
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestButtonsComponent implements OnInit {

  constructor(
    private ui: UiService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.ui.setTitle(this.route.snapshot.data.title);
  }
}
