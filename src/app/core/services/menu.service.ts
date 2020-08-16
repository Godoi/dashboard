import { Injectable, EventEmitter } from '@angular/core'

@Injectable()
export class MenuService {
  private show = true
  emitterToggle = new EventEmitter<boolean>()
  static statusMenu = new EventEmitter<boolean>()

  open(): boolean {
    return true
  }
  close(): boolean {
    return false
  }
  toggle(): void {
    this.show = !this.show
    MenuService.statusMenu.emit(this.show)
    this.emitterToggle.emit(this.show)
  }
}
