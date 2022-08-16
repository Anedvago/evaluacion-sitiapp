import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private clientHttp: HttpClient) { }

  private url = 'http://127.0.0.1:8080/users';

  listUsers() {
    let jsonRecibido: Observable<any> =
      this.clientHttp.get<any>(this.url + '', {});
    return jsonRecibido;
  }


  findUserByUsername(username:string) {
    console.log(username);
    
    let jsonRecibido: Observable<any> =
      this.clientHttp.get<any>(this.url + '/query?username=' + username, {});
    return jsonRecibido;
  }

  insertUser(user:User) {
    let jsonRecibido: Observable<any> =
      this.clientHttp.post<any>(this.url + '',
        user);
    return jsonRecibido;
  }

  updateUser(user:User) {
    let jsonRecibido: Observable<any> =
      this.clientHttp.post<any>(this.url + '',
        user);
    return jsonRecibido;
  }

  deleteUser(id: number) {
      let jsonRecibido: Observable<any> =
        this.clientHttp.delete<any>(this.url + '/' + id, {});
      return jsonRecibido
  }
}
