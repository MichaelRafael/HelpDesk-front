import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { OrdemServico } from 'src/app/models/ordemServico';
import { ClienteService } from 'src/app/services/cliente.service';
import { OrdemServicoService } from 'src/app/services/ordem-servico.service';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-ordem-servico-closed',
  templateUrl: './ordem-servico-closed.component.html',
  styleUrls: ['./ordem-servico-closed.component.css']
})
export class OrdemServicoClosedComponent implements OnInit {

  ordensServicos: OrdemServico[] = [];

  displayedColumns: string[] = ['cliente', 'tecnico', 'dataAbertura', 'dataFechamento', 'prioridade', 'status', 'action'];

  dataSource = new MatTableDataSource<OrdemServico>(this.ordensServicos);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service: OrdemServicoService,
    private router: Router,
    private tecnicoService: TecnicoService,
    private clienteService: ClienteService
    ) {}

   ngOnInit(): void {
    this.findAll();
  }
 
  findAll():void {
    this.service.findAll().subscribe((res) => {
      res.forEach(x => {
        if (x.status == "ENCERRADO") {
          this.ordensServicos.push(x);
        }
      })
      this.listarTecnico();
      this.listarCliente();
      this.dataSource = new MatTableDataSource<OrdemServico>(this.ordensServicos);
      this.dataSource.paginator = this.paginator;
    })
  }

  listarTecnico(): void {
    this.ordensServicos.forEach(x => {
      this.tecnicoService.findById(x.tecnico).subscribe(res => {
        x.tecnico = res.nome;
      })
    })    
  }

  listarCliente(): void {
    this.ordensServicos.forEach(x => {
      this.clienteService.findById(x.cliente).subscribe(res => {
        x.cliente = res.nome;
      })
    })
  }

  prioridade(x: any) {
    if ( x == 'BAIXA' ) {
      return 'baixa'
    } else if ( x == 'MÉDIA') {
      return 'media'
    } else {
      return 'alta'
    }
  } 
}
