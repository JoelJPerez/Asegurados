import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAseguradoComponent } from './crear-asegurado.component';

describe('CrearAseguradoComponent', () => {
  let component: CrearAseguradoComponent;
  let fixture: ComponentFixture<CrearAseguradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearAseguradoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearAseguradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
