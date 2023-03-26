import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tecnico } from '../models/tecnico';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class TecnicoService {

  constructor(
    private http: HttpClient,
    private snack: MatSnackBar,
    ) { }

  findAll():Observable<Tecnico[]> {
    return this.http.get<Tecnico[]>(`${environment.baseUrl}/tecnicos`);
  }


  findById(id: any): Observable<Tecnico> {
    return this.http.get<Tecnico>(`${environment.baseUrl}/tecnicos/${id}`)
  }


  create(tecnico: Tecnico): Observable<Tecnico[]> {
    return this.http.post<Tecnico[]>(`${environment.baseUrl}/tecnicos`, tecnico);
  }


  update(tecnico: Tecnico): Observable<Tecnico> {
    return this.http.put<Tecnico>(`${environment.baseUrl}/tecnicos/${tecnico.id}`, tecnico);
  }


  delete(id: any): Observable<void> {
    return this.http.delete<void>(`${environment.baseUrl}/tecnicos/${id}`)
  }
  

  message(msg: String): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }

}
  