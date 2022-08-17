import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/models/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private clientHttp: HttpClient) {}

  private url = 'http://127.0.0.1:8080/profiles';

  listProfiles() {
    let jsonRecibido: Observable<any> = this.clientHttp.get<any>(
      this.url + '',
      {}
    );
    return jsonRecibido;
  }

  insertProfile(profile: Profile) {
    let jsonRecibido: Observable<any> = this.clientHttp.post<any>(
      this.url + '',
      profile
    );
    return jsonRecibido;
  }
}
