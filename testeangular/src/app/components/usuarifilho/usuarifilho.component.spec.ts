import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarifilhoComponent } from './usuarifilho.component';

describe('UsuarifilhoComponent', () => {
  let component: UsuarifilhoComponent;
  let fixture: ComponentFixture<UsuarifilhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarifilhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarifilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
