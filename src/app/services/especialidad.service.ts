import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {

  constructor(private httpClient: HttpClient) { }

  private API_URL: string = "http://localhost:9525/api/especialidad";
  
  getEspecialidad(): Observable<any> {
    return this.httpClient.get( `${this.API_URL}/listar`)
    .pipe(res=> res);
  }

  getEspecialidadById(id: string=''): Observable<any>{
    return this.httpClient.get( `${this.API_URL}/{id}${id}`)
    .pipe(res=>res);
  }
}
