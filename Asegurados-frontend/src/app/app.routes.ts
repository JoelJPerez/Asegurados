import { Routes } from '@angular/router';
import { ListarAseguradosComponent } from './components/listar-asegurados/listar-asegurados.component';
import { CrearAseguradoComponent } from './components/crear-asegurado/crear-asegurado.component';

export const routes: Routes = [
    { path: '', redirectTo: 'asegurados', pathMatch: 'full' },
    { path: 'asegurados', component: ListarAseguradosComponent },
    { path: 'crear', component: CrearAseguradoComponent },
    { path: '**', redirectTo: 'asegurados' },
];
