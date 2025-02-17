import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { AseguradoService } from '../../services/asegurado.service';
import { Asegurado } from '../../models/asegurado';

@Component({
  selector: 'app-listar-asegurados',
  imports: [CommonModule, FormsModule, NgxPaginationModule, MatPaginatorModule],
  templateUrl: './listar-asegurados.component.html',
  styleUrls: ['./listar-asegurados.component.css'],
  standalone: true,
})
export class ListarAseguradosComponent implements OnInit {
  asegurados: Asegurado[] = [];
  aseguradosFiltrados: Asegurado[] = []; 
  filtroIdentificacion: string = '';
  page: number = 1;

  constructor(private aseguradoService: AseguradoService) {}

  ngOnInit(): void {
    this.listarAsegurados();
  }

  listarAsegurados(): void {
    this.aseguradoService.getAll().subscribe(
      (data)=> {
        this.asegurados = data;
        this.aseguradosFiltrados = [...data];
      },
      (error)=> {
        console.error('Error al obtener los asegurados:', error);
      }
    )
  }

  eliminarAsegurado(id: number): void {
    if (confirm('¿Está seguro de que desea eliminar este asegurado?')) {
      this.aseguradoService.deleteAsegurado(id).subscribe(
        () => {
          this.asegurados = this.asegurados.filter((a) => a.numeroIdentificacion !== id);
          alert('Asegurado eliminado con éxito');
        },
        (error) => {
          console.error('Error al eliminar el asegurado:', error);
        }
      );
    }
  }

  editarAsegurado(asegurado: Asegurado): void { 
    asegurado.editing = true; 
  } 
  
  guardarAsegurado(asegurado: Asegurado): void {
    this.aseguradoService.updateAsegurado(asegurado.numeroIdentificacion, asegurado).subscribe( 
      () => { 
        asegurado.editing = false; 
        alert('Asegurado actualizado con éxito'); 
      }, 
      (error) => { 
        console.error('Error al actualizar el asegurado:', error); 
      } 
    ); 
  }

  filtrarAsegurados(): void {
    if (this.filtroIdentificacion.trim()) { 
      const id = parseInt(this.filtroIdentificacion, 10);
      if (!isNaN(id)) {
        this.aseguradoService.getAseguradoById(id).subscribe(
          (data) => {
            this.aseguradosFiltrados = [data];
          },
          (error) => {
            console.error('Error al obtener el asegurado:', error);
            this.aseguradosFiltrados = [];
          }
        );
      }
      else {
        this.aseguradosFiltrados = [];
      }
    } else { 
      this.aseguradosFiltrados = [...this.asegurados]; 
    }
    
    this.page = 1;
  }

  pageChange(newPage: number): void {
    this.page = newPage; // Actualizar la página actual
    this.listarAsegurados(); // Cargar asegurados de la nueva página
  }
  
}
