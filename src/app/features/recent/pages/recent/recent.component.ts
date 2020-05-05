import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { UiService } from 'src/app/core/services/ui.service';

@Component({
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecentPageComponent implements OnInit {

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
