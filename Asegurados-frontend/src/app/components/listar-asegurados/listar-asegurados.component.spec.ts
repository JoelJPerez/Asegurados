import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAseguradosComponent } from './listar-asegurados.component';

describe('ListarAseguradosComponent', () => {
  let component: ListarAseguradosComponent;
  let fixture: ComponentFixture<ListarAseguradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarAseguradosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarAseguradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
