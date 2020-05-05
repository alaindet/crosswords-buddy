import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UiService } from 'src/app/core/services/ui.service';

@Component({
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPageComponent implements OnInit {

  constructor(
    private ui: UiService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.ui.setTitle(this.route.snapshot.data.title);
  }
}
