import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CaptureDocumentsRoutingModule } from './capture-documents-routing.module'
import { CaptureDocumentsComponent } from './capture-documents.component'
import { SharedModule } from '../../shared/shared.module'

@NgModule({
  declarations: [CaptureDocumentsComponent],
  imports: [CaptureDocumentsRoutingModule, CommonModule, SharedModule],
})
export class CaptureDocumentsModule {}
