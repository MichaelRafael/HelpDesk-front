import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdemServico } from 'src/app/models/ordemServico';
import { OrdemServicoService } from 'src/app/services/ordem-servico.service';

@Component({
  selector: 'app-ordem-servico-view',
  templateUrl: './ordem-servico-view.component.html',
  styleUrls: ['./ordem-servico-view.component.css']
})
export class OrdemServicoViewComponent implements OnInit{

  ordemServico: OrdemServico = {
    tecnico: '',
    cliente: '',
    observacoes: '',
    prioridade: '',
    status: ''
  }

  constructor(
    private service: OrdemServicoService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.ordemServico.id = this.route.snapshot.paramMap.get("id");
    this.findById();
  }

  findById(): void {
    this.service.findById(this.ordemServico.id).subscribe(res => {
      this.ordemServico = res;
    })
  }

}
