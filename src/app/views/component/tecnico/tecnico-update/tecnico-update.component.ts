import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tecnico } from 'src/app/models/tecnico';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-tecnico-update',
  templateUrl: './tecnico-update.component.html',
  styleUrls: ['./tecnico-update.component.css']
})
export class TecnicoUpdateComponent implements OnInit {

  tecnico: Tecnico = {
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
    private tecnicoService: TecnicoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.tecnico.id = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  findById(): void {
    this.tecnicoService.findById(this.tecnico.id).subscribe(res => {
      this.tecnico = res;
    })
  }

  update(): void {
    this.tecnicoService.update(this.tecnico).subscribe(() => {
      this.router.navigate(['tecnico']);
      this.tecnicoService.message('Técnico atualizado com sucesso!')
    }, err => {
      if (err.error.error.match('já cadastrado')) {
        this.tecnicoService.message(err.error.error)
      } else if (err.error.erro[0].message === 'número do registro de contribuinte individual brasileiro (CPF) inválido') {
        this.tecnicoService.message('CPF inválido!')
      }
    })
  }

  navigateToRead(): void {
    this.router.navigate(['tecnico']);
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
