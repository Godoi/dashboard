import { Component, OnInit, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs'
import { MenuService } from '../../../core/services/menu.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [MenuService],
})
export class SidebarComponent implements OnInit, OnDestroy {
  public show = true
  public userName = 'Anderson Godoi'
  private subscriptions = new Subscription()

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      MenuService.statusMenu.subscribe((res) => (this.show = res))
    )
  }

  toggleMaxMinSidebar(): void {
    this.menuService.toggle()
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }
}
