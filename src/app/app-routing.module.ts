import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './vista/dashboard/dashboard.component';
import { EditarComponent } from './vista/editar/editar.component';
import { LoginComponent } from './vista/login/login.component';
import { NuevoComponent } from './vista/nuevo/nuevo.component';

const routes: Routes = [
  { path: '' , redirectTo : 'dashboard' , pathMatch : 'full' },
  { path: 'login' , component : LoginComponent },
  { path: 'dashboard' , component : DashboardComponent },
  { path: 'nuevo' , component : NuevoComponent },
  { path: 'editar' , component : EditarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, DashboardComponent, NuevoComponent, EditarComponent]
