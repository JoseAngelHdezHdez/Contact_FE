import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowContactoComponent } from './show-contacto.component';

describe('ShowContactoComponent', () => {
  let component: ShowContactoComponent;
  let fixture: ComponentFixture<ShowContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowContactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
