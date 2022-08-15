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

  
  findClientByIdentificationAndType(identification:string,type:number) {
    let jsonRecibido: Observable<any> =
      this.clientHttp.get<any>(this.url + '/'+identification+"/"+type, {});
    return jsonRecibido;
  }

  formatDate(date:Date){
    let month = date.getMonth() + 1
    let monthText = month.toString().length == 1 ? "0" + month.toString() : month.toString()
    let day = date.getDate();
    let dayText = day.toString().length == 1 ? "0" + day.toString() : day.toString()
    let dateText = date.getFullYear() + "-" + monthText + "-" + dayText;
    return dateText;
  }

  insertClient(idType: number,
    identification: string,
    businessName: string,
    state: string) {
    let dateText = this.formatDate(new Date());

    let jsonRecibido: Observable<any> =
      this.clientHttp.post<any>(this.url + '',
        {
          "identificationType": { "identificationType": idType },
          "identification": identification,
          "businessName": businessName,
          "registrationDate": dateText,
          "state": state

        });
    return jsonRecibido;
  }

  updateClient(client:number,idType: number,
    identification: string,
    businessName: string,
    state: string) {
    let dateText = this.formatDate(new Date());

    let jsonRecibido: Observable<any> =
      this.clientHttp.post<any>(this.url + '',
        {
          "client":client,
          "identificationType": { "identificationType": idType },
          "identification": identification,
          "businessName": businessName,
          "registrationDate": dateText,
          "state": state

        });
    return jsonRecibido;
  }
}

/* {
  "client": 2,
    "identificationType" : { "identificationType": 1 },
  "identification" : "9518740236",
    "businessName": "Multi Juegos",
      "registrationDate": "2022-08-09",
        "state": "active"
} */