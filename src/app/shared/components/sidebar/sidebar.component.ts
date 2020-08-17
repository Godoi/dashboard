import { Component, OnInit, OnDestroy } from '@angular/core'
import { Router } from '@angular/router'
import { Subscription } from 'rxjs'
import { MenuService } from '../../../core/services/menu.service'
import { AuthService } from '../../../core/authentication/auth.service'

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

  constructor(
    private authService: AuthService,
    private menuService: MenuService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      MenuService.statusMenu.subscribe((res) => (this.show = res))
    )
  }

  logout(): void {
    this.authService.logout()
    this.router.navigate(['login'])
  }

  toggleMaxMinSidebar(): void {
    this.menuService.toggle()
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }
}
