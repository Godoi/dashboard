import { Component, OnInit, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs'

import { MenuService } from '../../../core/services/menu.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [MenuService],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public show = true
  private subscriptions = new Subscription()

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      MenuService.statusMenu.subscribe((res) => {
        this.show = res
      })
    )
  }

  toggleOpenMenu(): void {
    this.menuService.toggle()
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }
}
