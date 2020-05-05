import { Component, ElementRef, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { UiService } from 'src/app/core/services/ui.service';

type ProcessedFile = File | string;

@Component({
  selector: 'ui-form-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FormFileUploadComponent),
    multi: true
  }]
})
export class FormFileUploadComponent implements ControlValueAccessor {

  @Input() showSelectedFile = true;
  @Input() processAs: 'json' | 'file' = 'json';
  @Output() processed = new EventEmitter<ProcessedFile>();

  loading = false;
  uniqueTimestamp = Date.now();
  file: File | null = null;
  defaultFileName = 'No file selected';
  fileName = this.defaultFileName;
  onChange: Function;
  onTouched: Function;

  constructor(
    private host: ElementRef<HTMLInputElement>,
    private ui: UiService,
  ) {}

  // ControlValueAccessor
  // Disallow Angular => Component communication
  writeValue(value: any) {
    this.host.nativeElement.value = '';
    this.file = null;
  }

  registerOnChange(fn: Function) {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function) {
    this.onTouched = fn;
  }

  onFileSelect(event: FileList) {

    this.file = event && event.item(0);

    // No file selected
    if (!this.file) {
      this.fileName = this.defaultFileName;
      this.onChange(null);
      return;
    }

    this.fileName = this.file.name;

    const reader = new FileReader();

    reader.onloadstart = this.onLoadStart.bind(this);
    reader.onload = this.onLoad.bind(this);
    reader.onerror = this.onError.bind(this);

    reader.readAsText(this.file, 'UTF-8');

    // var reader = new FileReader();
    // reader.readAsText(file, "UTF-8");
    // reader.onload = function (evt) {
    //   console.log(JSON.parse(evt.target.result));
    // }
    // reader.onerror = function (evt) {
    //   console.log('error reading file');
    // }

    // // Output the file meta data and the base 64 content of it
    // const reader = new FileReader();

    // reader.onloadstart = (event: any) => {
    //   this.loading = true;
    // }

    // reader.onloadend = (event: any) => {
    //   if (this.base64ContentOnly) {
    //     this.base64 = this.extractBase64Content(reader.result);
    //   } else {
    //     this.base64 = reader.result;
    //   }
    //   this.onChange({
    //     meta: this.file,
    //     base64: this.base64
    //   });
    //   this.loading = false;
    // }

    // reader.readAsDataURL(this.file);
  }

  private onLoadStart(event: any) {
    this.ui.isLoading();
  }

  private onLoad(event: any) {

  }

  private onLoadEnd(event: any) {
    this.ui.hasLoaded();
  }

  private onError(event: any) {
    alert('ERROR: Invalid file');
  }
}
