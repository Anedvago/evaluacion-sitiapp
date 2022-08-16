import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/models/client';
import { Invoice } from 'src/app/models/invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private clientHttp: HttpClient) { }

  private url = 'http://127.0.0.1:8080/invoices';

  /* listClients() {
    let jsonRecibido: Observable<any> =
      this.clientHttp.get<any>(this.url + '', {});
    return jsonRecibido;
  }


  findClientByIdentificationAndType(identification: string, type: number) {
    let jsonRecibido: Observable<any> =
      this.clientHttp.get<any>(this.url + '/' + identification + "/" + type, {});
    return jsonRecibido;
  }
 */
  formatDate(date: Date) {
    let month = date.getMonth() + 1
    let monthText = month.toString().length == 1 ? "0" + month.toString() : month.toString()
    let day = date.getDate();
    let dayText = day.toString().length == 1 ? "0" + day.toString() : day.toString()
    let dateText = date.getFullYear() + "-" + monthText + "-" + dayText;
    return dateText;
  }

  insertInvoice(client: Client) {
    let dateText = this.formatDate(new Date());
    let jsonRecibido: Observable<any> =
      this.clientHttp.post<any>(this.url + '',
        {
          "client": client,
          "date": dateText

        });
    return jsonRecibido;
  }

  /* updateClient(client: number, idType: number,
    identification: string,
    businessName: string,
    state: string) {
    let dateText = this.formatDate(new Date());

    let jsonRecibido: Observable<any> =
      this.clientHttp.post<any>(this.url + '',
        {
          "client": client,
          "identificationType": { "identificationType": idType },
          "identification": identification,
          "businessName": businessName,
          "state": state

        });
    return jsonRecibido;
  } */

  /* deleteClient(id: number) {
    
      let jsonRecibido: Observable<any> =
        this.clientHttp.delete<any>(this.url + '/' + id, {});
      return jsonRecibido


  } */
}
