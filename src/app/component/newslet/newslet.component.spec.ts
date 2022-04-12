import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletComponent } from './newslet.component';

describe('NewsletComponent', () => {
  let component: NewsletComponent;
  let fixture: ComponentFixture<NewsletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
