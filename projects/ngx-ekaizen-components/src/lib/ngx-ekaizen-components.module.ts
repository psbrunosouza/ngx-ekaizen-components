import { NgModule } from '@angular/core';
import { NgxEkaizenComponentsComponent } from './ngx-ekaizen-components.component';
import { EkaizenTextareaComponent } from './ekaizen-textarea/ekaizen-textarea.component';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [
    NgxEkaizenComponentsComponent,
    EkaizenTextareaComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    NgxEkaizenComponentsComponent,
    EkaizenTextareaComponent
  ]
})
export class NgxEkaizenComponentsModule { }
