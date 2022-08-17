import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IdentificationType } from 'src/app/models/identificationType';

@Injectable({
  providedIn: 'root',
})
export class IdTypesService {
  constructor(private clientHttp: HttpClient) {}

  private url = 'http://127.0.0.1:8080/idtypes';

  listIdTypes() {
    let jsonRecibido: Observable<any> = this.clientHttp.get<any>(
      this.url + '',
      {}
    );
    return jsonRecibido;
  }

  insertIdTypes(idTypes: IdentificationType) {
    let jsonRecibido: Observable<any> = this.clientHttp.post<any>(
      this.url + '',
      idTypes
    );
    return jsonRecibido;
  }
}
