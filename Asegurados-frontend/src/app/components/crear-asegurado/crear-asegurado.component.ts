import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AseguradoService } from '../../services/asegurado.service';
import { Asegurado } from '../../models/asegurado';


@Component({
  selector: 'app-crear-asegurado',
  imports: [CommonModule, FormsModule],
  templateUrl: './crear-asegurado.component.html',
  styleUrl: './crear-asegurado.component.css'
})
export class CrearAseguradoComponent {

  asegurado: Asegurado = {
    numeroIdentificacion: 0,
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    telefonoContacto: '',
    email: '',
    fechaNacimiento: new Date(),
    valorEstimadoSeguro: 0,
    observaciones: '',
  };

  constructor(private aseguradoService: AseguradoService, private router: Router) {}

  onSubmit(): void {
    this.aseguradoService.createAsegurado(this.asegurado).subscribe(
      () => {
        alert('Asegurado creado con éxito');
        this.router.navigate(['/asegurados']);
      },
      (error) => {
        console.error('Error al crear el asegurado:', error);
      }
    );
  }

}
