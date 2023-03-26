import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteCreateComponent } from './views/component/cliente/cliente-create/cliente-create.component';
import { ClienteDeleteComponent } from './views/component/cliente/cliente-delete/cliente-delete.component';
import { ClienteReadComponent } from './views/component/cliente/cliente-read/cliente-read.component';
import { ClienteUpdateComponent } from './views/component/cliente/cliente-update/cliente-update.component';
import { HomeComponent } from './views/component/home/home.component';
import { OrdemServicoClosedComponent } from './views/component/ordemServico/ordem-servico-closed/ordem-servico-closed.component';
import { OrdemServicoCreateComponent } from './views/component/ordemServico/ordem-servico-create/ordem-servico-create.component';
import { OrdemServicoReadComponent } from './views/component/ordemServico/ordem-servico-read/ordem-servico-read.component';
import { OrdemServicoUpdateComponent } from './views/component/ordemServico/ordem-servico-update/ordem-servico-update.component';
import { OrdemServicoViewComponent } from './views/component/ordemServico/ordem-servico-view/ordem-servico-view.component';
import { TecnicoCreateComponent } from './views/component/tecnico/tecnico-create/tecnico-create.component';
import { TecnicoDeleteComponent } from './views/component/tecnico/tecnico-delete/tecnico-delete.component';
import { TecnicoReadComponent } from './views/component/tecnico/tecnico-read/tecnico-read.component';
import { TecnicoUpdateComponent } from './views/component/tecnico/tecnico-update/tecnico-update.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, 
  {
    path: 'tecnico',
    component: TecnicoReadComponent
  },
  {
    path: 'tecnico/create',
    component: TecnicoCreateComponent
  },
  {
    path: 'tecnico/update/:id',
    component: TecnicoUpdateComponent
  },
  {
    path: 'tecnico/delete/:id',
    component: TecnicoDeleteComponent
  },
  {
    path: 'cliente',
    component: ClienteReadComponent
  },
  {
    path: 'cliente/create',
    component: ClienteCreateComponent
  },
  {
    path: 'cliente/update/:id',
    component: ClienteUpdateComponent
  },
  {
    path: 'cliente/delete/:id',
    component: ClienteDeleteComponent
  },
  {
    path: 'ordemServico',
    component: OrdemServicoReadComponent
  },
  {
    path: 'ordemServico/create',
    component: OrdemServicoCreateComponent
  },
  {
    path: 'ordemServico/update/:id',
    component: OrdemServicoUpdateComponent
  },
  {
    path: 'ordemServico/view/:id',
    component: OrdemServicoViewComponent
  },
  {
    path: 'ordemServico/closed',
    component: OrdemServicoClosedComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
