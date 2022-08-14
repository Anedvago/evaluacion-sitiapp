import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private clientHttp: HttpClient) { }

  private url = 'http://127.0.0.1:8080/clients';

  listClients() {
    let jsonRecibido: Observable<any> =
      this.clientHttp.get<any>(this.url + '', {});
    return jsonRecibido;
  }
}
