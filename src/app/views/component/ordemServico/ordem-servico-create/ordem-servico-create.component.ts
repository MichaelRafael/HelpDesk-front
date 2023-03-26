import { Component, OnInit } from '@angular/core';
import { TecnicoService } from 'src/app/services/tecnico.service';
import { Tecnico } from 'src/app/models/tecnico';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/models/cliente';
import { OrdemServico } from 'src/app/models/ordemServico';
import { Router } from '@angular/router';
import { OrdemServicoService } from 'src/app/services/ordem-servico.service';


@Component({
  selector: 'app-ordem-servico-create',
  templateUrl: './ordem-servico-create.component.html',
  styleUrls: ['./ordem-servico-create.component.css']
})
export class OrdemServicoCreateComponent implements OnInit {

  ordemServico: OrdemServico = {
    tecnico: '',
    cliente: '',
    observacoes: '',
    status: '',
    prioridade: ''
  }

  tecnicos: Tecnico[] = []
  clientes: Cliente[] = []

  constructor(
    private tecnicoService: TecnicoService,
    private clienteService: ClienteService,
    private os: OrdemServicoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listarTecnicos();
    this.listarClientes();
  }

  create(): void {
    this.os.create(this.ordemServico).subscribe(res => {
      this.router.navigate(['ordemServico'])
      this.os.message('Ordem de serviço criada com sucesso!')
    })
  }

  listarTecnicos(): void {
    this.tecnicoService.findAll().subscribe(res => {
      this.tecnicos = res;
    })
  }

  listarClientes(): void {
    this.clienteService.findAll().subscribe(res => {
      this.clientes = res;
    })
  } 

}
