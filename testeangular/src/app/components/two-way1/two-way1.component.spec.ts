import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWay1Component } from './two-way1.component';

describe('TwoWay1Component', () => {
  let component: TwoWay1Component;
  let fixture: ComponentFixture<TwoWay1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWay1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWay1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
