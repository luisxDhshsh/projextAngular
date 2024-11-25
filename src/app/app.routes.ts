/*import { Routes } from '@angular/router';

export const routes: Routes = [];
*/


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CriarMemeComponent } from './pages/criar-meme/criar-meme.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { DetalhesMemeComponent } from './pages/detalhes-meme/detalhes-meme.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'criar', component: CriarMemeComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'meme/:id', component: DetalhesMemeComponent },
  { path: 'perfil', component: PerfilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
