import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private clientHttp: HttpClient) { }

  private url = 'http://127.0.0.1:8080/products';

  listProducts() {
    let jsonRecibido: Observable<any> =
      this.clientHttp.get<any>(this.url + '', {});
    return jsonRecibido;
  }


  findProductByRef(ref:number) {
    let jsonRecibido: Observable<any> =
      this.clientHttp.get<any>(this.url + '/' + ref, {});
    return jsonRecibido;
  }

  insertProduct(product:Product) {
    let jsonRecibido: Observable<any> =
      this.clientHttp.post<any>(this.url + '',
        product);
    return jsonRecibido;
  }

  updateProduct(product:Product) {
    let jsonRecibido: Observable<any> =
      this.clientHttp.post<any>(this.url + '',
        product);
    return jsonRecibido;
  }

  deleteProduct(id: number) {
    
      let jsonRecibido: Observable<any> =
        this.clientHttp.delete<any>(this.url + '/' + id, {});
      return jsonRecibido


  }
}
