import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneTasksDialogComponent } from './done-tasks-dialog.component';

describe('DoneTasksDialogComponent', () => {
  let component: DoneTasksDialogComponent;
  let fixture: ComponentFixture<DoneTasksDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoneTasksDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneTasksDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
