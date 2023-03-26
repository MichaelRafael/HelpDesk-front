import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tecnico } from 'src/app/models/tecnico';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-tecnico-delete',
  templateUrl: './tecnico-delete.component.html',
  styleUrls: ['./tecnico-delete.component.css']
})
export class TecnicoDeleteComponent implements OnInit {

  tecnico: Tecnico = {
    id: '',
    nome: '',
    cpf: '',
    telefone: '',
  }

  constructor(
    private router: Router,
    private tecnicoService: TecnicoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.tecnico.id = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  findById(): void {
    this.tecnicoService.findById(this.tecnico.id).subscribe(res => {
      this.tecnico = res;
    })
  }

  delete(): void {
    this.tecnicoService.delete(this.tecnico.id).subscribe(() => {
      this.tecnicoService.message('Técnico deletado com sucesso!')
      this.router.navigate(['tecnico']);      
    }, err => {
      if (err.error.error.match('já cadastrado')) {
        this.tecnicoService.message(err.error.error)
      } if (err.error.error.match('possui ordens de serviço')) {
        this.tecnicoService.message('Técnico possui ordens de serviço, não pode ser deletado!')
      } else if (err.error.erro[0].message === 'número do registro de contribuinte individual brasileiro (CPF) inválido') {
        this.tecnicoService.message('CPF inválido!')
      }
    })
  }  
}
