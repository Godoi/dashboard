import { Component } from '@angular/core'
import { MenuService } from '../../src/app/core/services/menu.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MenuService],
})
export class AppComponent {
  public show = true

  constructor(private menuService: MenuService) {
    MenuService.statusMenu.subscribe((res) => {
      this.show = res
    })
  }
}
