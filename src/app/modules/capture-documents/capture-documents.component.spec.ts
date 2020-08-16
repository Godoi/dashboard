import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CaptureDocumentsComponent } from './capture-documents.component'

describe('CaptureDocumentsComponent', () => {
  let component: CaptureDocumentsComponent
  let fixture: ComponentFixture<CaptureDocumentsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CaptureDocumentsComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptureDocumentsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
