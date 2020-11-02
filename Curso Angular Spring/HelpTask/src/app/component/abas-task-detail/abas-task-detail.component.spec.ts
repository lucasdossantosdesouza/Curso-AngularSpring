import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbasTaskDetailComponent } from './abas-task-detail.component';

describe('AbasTaskDetailComponent', () => {
  let component: AbasTaskDetailComponent;
  let fixture: ComponentFixture<AbasTaskDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbasTaskDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbasTaskDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
