import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlExampleComponent } from './html-example.component';

describe('HtmlExampleComponent', () => {
  let component: HtmlExampleComponent;
  let fixture: ComponentFixture<HtmlExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
