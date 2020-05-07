import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { AlertsService } from 'src/app/core/services/alerts.service';

@Component({
  selector: 'ui-form-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FormFileUploadComponent implements OnInit {

  @Input() showSelectedFile = true;
  @Input() centered = false;
  @Output() loaded = new EventEmitter<string>();

  loading = false;
  uniqueTimestamp = Date.now();
  file: File | null = null;
  defaultFileName = 'No file selected';
  fileName = this.defaultFileName;

  private fileReader: FileReader;

  constructor(
    private alertsService: AlertsService,
  ) {}

  ngOnInit() {
    this.initFileReader();
  }

  onFileSelect(event: FileList) {

    // Extract file
    this.file = event && event.item(0);

    // No file selected
    if (!this.file) {
      this.fileName = this.defaultFileName;
      return;
    }

    // Read file name
    this.fileName = this.file.name;

    // Read file as text (triggers file events)
    this.fileReader.readAsText(this.file, 'UTF-8');
  }

  private initFileReader() {
    this.fileReader = new FileReader();
    this.fileReader.onloadstart = (event) => this.onLoadStart(event);
    this.fileReader.onload = (event) => this.onLoad(event);
    this.fileReader.onerror = (event) => this.onError(event);
  }

  private onLoadStart(event: Event) {
    this.loading = true;
  }

  private onLoad(event: any) {
    this.loaded.emit(this.fileReader.result as string);
    this.loading = false;
  }

  private onError(event: Event) {
    this.alertsService.setErrorAlert('ERROR', 'Invalid file');
    console.log('ERROR: Invalid file', event);
  }
}
