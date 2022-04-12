import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DhashboardTeacherComponent } from './dhashboard-teacher.component';

describe('DhashboardTeacherComponent', () => {
  let component: DhashboardTeacherComponent;
  let fixture: ComponentFixture<DhashboardTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhashboardTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhashboardTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
