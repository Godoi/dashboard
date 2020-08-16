import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component'
import { CardComponent } from './components/card/card.component'
import { HeaderLocationComponent } from './components/header-location/header-location.component'

@NgModule({
  declarations: [BreadcrumbComponent, CardComponent, HeaderLocationComponent],
  imports: [CommonModule, RouterModule],
  exports: [BreadcrumbComponent, CardComponent, HeaderLocationComponent],
  entryComponents: [],
})
export class SharedModule {}
