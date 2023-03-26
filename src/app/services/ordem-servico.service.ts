import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OrdemServico } from '../models/ordemServico';

@Injectable({
  providedIn: 'root'
})
export class OrdemServicoService {
  
  constructor(
    private http: HttpClient,
    private snack: MatSnackBar,
    ) { }

 
  findById(id: any): Observable<OrdemServico> {
    return this.http.get<OrdemServico>(`${environment.baseUrl}/ordemServico/${id}`)
  }

  findAll():Observable<OrdemServico[]> {
    return this.http.get<OrdemServico[]>(`${environment.baseUrl}/ordemServico`);
  }

  create(ordemServico: OrdemServico): Observable<OrdemServico[]> {
    return this.http.post<OrdemServico[]>(`${environment.baseUrl}/ordemServico`, ordemServico);
  }


  update(ordemServico: OrdemServico): Observable<OrdemServico> {
    return this.http.put<OrdemServico>(`${environment.baseUrl}/ordemServico`, ordemServico);
  }


  delete(id: any): Observable<void> {
    return this.http.delete<void>(`${environment.baseUrl}/ordemServico/${id}`)
  }
  

  message(msg: String): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }

}