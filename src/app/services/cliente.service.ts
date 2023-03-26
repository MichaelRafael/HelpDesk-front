import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cliente } from '../models/cliente';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private http: HttpClient,
    private snack: MatSnackBar,
    ) { }

  findById(id: any): Observable<Cliente> {
    return this.http.get<Cliente>(`${environment.baseUrl}/clientes/${id}`)
  }  

  findAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${environment.baseUrl}/clientes`);
  }

  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${environment.baseUrl}/clientes`, cliente)
  }

  update(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${environment.baseUrl}/clientes/${cliente.id}`, cliente);
  }

  delete(id: any): Observable<void> {
    return this.http.delete<void>(`${environment.baseUrl}/clientes/${id}`);
  }



  message(msg: String): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }
}
