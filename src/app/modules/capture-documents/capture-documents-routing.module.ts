import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CaptureDocumentsComponent } from './capture-documents.component'

const routes: Routes = [
  {
    path: '',
    component: CaptureDocumentsComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaptureDocumentsRoutingModule {}
