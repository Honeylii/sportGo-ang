import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestStateComponent } from './test-state.component';

describe('TestStateComponent', () => {
  let component: TestStateComponent;
  let fixture: ComponentFixture<TestStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
