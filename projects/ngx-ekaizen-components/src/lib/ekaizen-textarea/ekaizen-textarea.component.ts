import {Component, Input, OnInit, Optional, Self} from '@angular/core';
import {ControlValueAccessor, NgControl} from "@angular/forms";

@Component({
  selector: 'ek-textarea',
  templateUrl: './ekaizen-textarea.component.html',
  styleUrls: ['./ekaizen-textarea.component.css']
})
export class EkaizenTextareaComponent implements OnInit, ControlValueAccessor {
  @Input() placeholder = '';

  @Input() required = false;

  @Input() disabled = false;

  @Input() readonly = false;

  @Input() maxlength = 255;

  @Input() minlength = 0;

  @Input() rows = 8;

  @Input() label = '';

  @Input() resize = false;

  @Input() errorMessages: any = {
    required: 'Campo obrigatório',
  };

  value: string;

  public get errors(): string[] {
    return Object.entries(this.ngControl.errors ?? {})
      .filter(([key, value]) => !!value)
      .map(([key]) => key);
  }

  constructor(@Optional() @Self() public ngControl: NgControl) {
    this.ngControl && (this.ngControl.valueAccessor = this);
  }

  ngOnInit(): void {}

  public onChangeFn = (_: any) => {};

  public onTouchedFn = () => {};

  public registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouchedFn = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public writeValue(obj: any): void {
    this.value = obj;
  }

  public onChange() {
    this.onChangeFn(this.value);
  }

  public translateErrorString(errors: string[]): string {
    return errors.map((error: string) => this.errorMessages[error]).join(', ');
  }
}
