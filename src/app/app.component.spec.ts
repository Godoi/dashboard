import { TestBed, async } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { SharedModule } from '../app/shared/shared.module'
import { HeaderComponent } from './shared/components/header/header.component'
import { SidebarComponent } from './shared/components/sidebar/sidebar.component'
import { AppComponent } from './app.component'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule,
        SharedModule,
      ],
      declarations: [HeaderComponent, SidebarComponent, AppComponent],
    }).compileComponents()
  }))

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })
})
