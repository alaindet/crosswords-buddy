import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UiService } from 'src/app/core/services/ui.service';

@Component({
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestsPageComponent implements OnInit {

  constructor(
    private ui: UiService,
    private route: ActivatedRoute,
  ) {}

  links: string[] = [
    '/test/alerts',
    '/test/buttons',
    '/test/lists',
    '/test/modals',
  ];

  ngOnInit() {
    this.ui.setTitle(this.route.snapshot.data.title);
  }
}
