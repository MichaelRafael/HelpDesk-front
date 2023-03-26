import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { HeaderComponent } from './views/component/template/header/header.component';
import { FooterComponent } from './views/component/template/footer/footer.component';
import { NavComponent } from './views/component/template/nav/nav.component';
import { HomeComponent } from './views/component/home/home.component';
import { TecnicoReadComponent } from './views/component/tecnico/tecnico-read/tecnico-read.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { TecnicoCreateComponent } from './views/component/tecnico/tecnico-create/tecnico-create.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { TecnicoUpdateComponent } from './views/component/tecnico/tecnico-update/tecnico-update.component';
import { TecnicoDeleteComponent } from './views/component/tecnico/tecnico-delete/tecnico-delete.component';
import { ClienteReadComponent } from './views/component/cliente/cliente-read/cliente-read.component';
import { ClienteCreateComponent } from './views/component/cliente/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './views/component/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './views/component/cliente/cliente-delete/cliente-delete.component';
import { OrdemServicoReadComponent } from './views/component/ordemServico/ordem-servico-read/ordem-servico-read.component';
import { OrdemServicoCreateComponent } from './views/component/ordemServico/ordem-servico-create/ordem-servico-create.component';
import { OrdemServicoUpdateComponent } from './views/component/ordemServico/ordem-servico-update/ordem-servico-update.component';
import { OrdemServicoViewComponent } from './views/component/ordemServico/ordem-servico-view/ordem-servico-view.component';
import { MatMenuModule } from '@angular/material/menu';
import { OrdemServicoClosedComponent } from './views/component/ordemServico/ordem-servico-closed/ordem-servico-closed.component';

@NgModule({
  declarations: [    
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    TecnicoReadComponent,
    TecnicoCreateComponent,
    TecnicoUpdateComponent,
    TecnicoDeleteComponent,
    ClienteReadComponent,
    ClienteCreateComponent,
    ClienteUpdateComponent,
    ClienteDeleteComponent,
    OrdemServicoReadComponent,
    OrdemServicoCreateComponent,
    OrdemServicoUpdateComponent,
    OrdemServicoViewComponent,
    OrdemServicoClosedComponent,  
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    MatInputModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatMenuModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
