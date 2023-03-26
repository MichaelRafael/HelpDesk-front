import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { OrdemServico } from 'src/app/models/ordemServico';
import { Tecnico } from 'src/app/models/tecnico';
import { ClienteService } from 'src/app/services/cliente.service';
import { OrdemServicoService } from 'src/app/services/ordem-servico.service';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-ordem-servico-update',
  templateUrl: './ordem-servico-update.component.html',
  styleUrls: ['./ordem-servico-update.component.css']
})
export class OrdemServicoUpdateComponent implements OnInit {

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
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.ordemServico.id = this.route.snapshot.paramMap.get('id');    
    this.findById();
    this.listarTecnicos();
    this.listarClientes();
  }

  findById(): void {
    this.os.findById(this.ordemServico.id).subscribe(res => {
      this.ordemServico = res;
      this.converteDados();
    })
  }  

  update(): void {
    this.os.update(this.ordemServico).subscribe(res => {
      this.router.navigate(['ordemServico'])
      this.os.message('Ordem de serviço atualizada com sucesso!')
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

  converteDados():void {
    if (this.ordemServico.status == "ABERTO") {
      this.ordemServico.status = 0;
    } else if (this.ordemServico.status == "EM ANDAMENTO") {
      this.ordemServico.status = 1;
    } else {
      this.ordemServico.status = 2;
    }

    if (this.ordemServico.prioridade == "BAIXA") {
      this.ordemServico.prioridade = 0;
    } else if (this.ordemServico.prioridade == "MÉDIA") {
      this.ordemServico.prioridade = 1;
    } else {
      this.ordemServico.prioridade = 2;
    }
  } 
}