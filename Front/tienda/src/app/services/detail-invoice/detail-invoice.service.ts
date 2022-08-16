import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailInvoiceService {

  constructor(private clientHttp: HttpClient) { }

  private url = 'http://127.0.0.1:8080/detail-invoices';

  insertDetailInvoice(consecutive: number, productId: number, amount: number, unitValue: number) {
    let jsonRecibido: Observable<any> =
      this.clientHttp.post<any>(this.url + '',
        {
          "consecutive": { "consecutive": consecutive },
          "productId": { "id": productId },
          "amount": amount,
          "unitValue": unitValue
        });
    return jsonRecibido;
  }

}
