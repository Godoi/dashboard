import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { HeaderLocationComponent } from './header-location.component'

describe('HeaderLocationComponent', () => {
  let component: HeaderLocationComponent
  let fixture: ComponentFixture<HeaderLocationComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderLocationComponent],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule,
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLocationComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
