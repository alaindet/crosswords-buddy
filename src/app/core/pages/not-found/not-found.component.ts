import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { UiService } from 'src/app/core/services/ui.service';

@Component({
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundPageComponent implements OnInit {

  constructor(
    private ui: UiService,
    private titleService: Title,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const title = this.route.snapshot.data.title;
    this.titleService.setTitle(title);
    this.ui.setTitle(title);
  }
}
