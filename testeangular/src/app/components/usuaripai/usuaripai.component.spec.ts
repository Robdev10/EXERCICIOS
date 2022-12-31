import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuaripaiComponent } from './usuaripai.component';

describe('UsuaripaiComponent', () => {
  let component: UsuaripaiComponent;
  let fixture: ComponentFixture<UsuaripaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuaripaiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuaripaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
