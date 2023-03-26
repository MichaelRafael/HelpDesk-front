import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';


@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent implements OnInit {

  cliente: Cliente = {
    id: '',
    nome: '',
    cpf: '',
    telefone: '',
  }

  constructor(
    private router: Router,
    private clienteService: ClienteService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.cliente.id = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  findById(): void {
    this.clienteService.findById(this.cliente.id).subscribe(res => {
      this.cliente = res;
    })
  }

  delete(): void {
    this.clienteService.delete(this.cliente.id).subscribe(() => {
      this.clienteService.message('cliente deletado com sucesso!')
      this.router.navigate(['cliente']);      
    }, err => {
      if (err.error.error.match('já cadastrado')) {
        this.clienteService.message(err.error.error)
      } if (err.error.error.match('possui ordens de serviço')) {
        this.clienteService.message('Cliente possui ordens de serviço, não pode ser deletado!')
      } else if (err.error.erro[0].message === 'número do registro de contribuinte individual brasileiro (CPF) inválido') {
        this.clienteService.message('CPF inválido!')
      }
    })
  }  
}
