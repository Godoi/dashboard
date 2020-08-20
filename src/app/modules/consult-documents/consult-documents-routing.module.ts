import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ConsultDocumentsComponent } from './consult-documents.component'

const routes: Routes = [
  {
    path: '',
    component: ConsultDocumentsComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultDocumentsRoutingModule {}
