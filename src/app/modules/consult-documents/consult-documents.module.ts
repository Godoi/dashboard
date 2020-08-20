import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ConsultDocumentsRoutingModule } from './consult-documents-routing.module'
import { ConsultDocumentsComponent } from './consult-documents.component'
import { SharedModule } from '../../shared/shared.module'

@NgModule({
  declarations: [ConsultDocumentsComponent],
  imports: [ConsultDocumentsRoutingModule, CommonModule, SharedModule],
})
export class ConsultDocumentsModule {}
