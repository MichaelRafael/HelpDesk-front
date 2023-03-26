import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {

  cliente: Cliente = {
    id: '',
    nome: '',
    cpf: '',
    telefone: '',
  }

  nome: FormControl = new FormControl(null, Validators.minLength(3))
  cpf: FormControl = new FormControl(null, Validators.minLength(11))
  telefone: FormControl = new FormControl(null, Validators.minLength(11))

  constructor(
    private router: Router,
    private clienteService: ClienteService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cliente.id = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  findById(): void {
    this.clienteService.findById(this.cliente.id).subscribe(res => {
      this.cliente = res;
    })
  }

  update(): void {
    this.clienteService.update(this.cliente).subscribe(() => {
      this.router.navigate(['cliente']);
      this.clienteService.message('Cliente atualizado com sucesso!')
    }, err => {
      if (err.error.error.match('já cadastrado')) {
        this.clienteService.message(err.error.error)
      } else if (err.error.erro[0].message === 'número do registro de contribuinte individual brasileiro (CPF) inválido') {
        this.clienteService.message('CPF inválido!')
      }
    })
  }

  navigateToRead(): void {
    this.router.navigate(['cliente']);
  }


  errorValidName() {
    if (this.nome.invalid) {
      return "O campo nome deve ter entre 3 e 50 caracteres!"
    }
    return false;
  } 

  errorValidCpf() {
    if (this.cpf.invalid) {
      return "O campo cpf deve ter entre 11 e 15 caracteres!"
    }
    return false;
  } 

  errorValidTelefone() {
    if (this.telefone.invalid) {
      return "O campo telefone deve ter entre 11 e 15 caracteres!"
    }
    return false;
  } 
}

