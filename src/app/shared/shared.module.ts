import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component'
import { CardComponent } from './components/card/card.component'

@NgModule({
  declarations: [BreadcrumbComponent, CardComponent],
  imports: [CommonModule, RouterModule],
  exports: [BreadcrumbComponent, CardComponent],
  entryComponents: [],
})
export class SharedModule {}
