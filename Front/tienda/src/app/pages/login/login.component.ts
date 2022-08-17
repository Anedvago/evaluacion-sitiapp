import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdentificationType } from 'src/app/models/identificationType';
import { Profile } from 'src/app/models/profile';
import { User } from 'src/app/models/user';
import { IdTypesService } from 'src/app/services/idTypes/id-types.service';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService,
    private profileService: ProfileService,
    private idTypesService: IdTypesService
  ) {}

  ngOnInit(): void {
    console.log();
    if (localStorage.getItem('initial_config') != null) {
      localStorage.getItem('initial_config');
    } else {
      let profile1 = new Profile(1, 'Administrador');
      let profile2 = new Profile(2, 'Cajero');
      this.profileService.insertProfile(profile1).subscribe(() => {
        this.profileService.insertProfile(profile2).subscribe(() => {
          let profile = new Profile(1, 'Administrador');
          let user = new User(1, 'super', 'user', 'admin', 'admin', profile);
          this.userService.insertUser(user).subscribe(() => {
            let type1 = new IdentificationType(1, 'CC', 'Cédula de Ciudadanía');
            let type2 = new IdentificationType(2, 'TI', 'Tarjeta de Identidad');
            let type3 = new IdentificationType(3, 'RC', 'Registro Civil');
            let type4 = new IdentificationType(
              4,
              'CE',
              'Cédula de Extranjería'
            );
            let type5 = new IdentificationType(
              5,
              'NIP',
              'Número de Identificación Personal'
            );
            let type6 = new IdentificationType(
              6,
              'NES',
              'Número de Secretaría'
            );
            this.idTypesService.insertIdTypes(type1).subscribe(() => {
              this.idTypesService.insertIdTypes(type2).subscribe(() => {
                this.idTypesService.insertIdTypes(type3).subscribe(() => {
                  this.idTypesService.insertIdTypes(type4).subscribe(() => {
                    this.idTypesService.insertIdTypes(type5).subscribe(() => {
                      this.idTypesService
                        .insertIdTypes(type6)
                        .subscribe(() => {});
                    });
                  });
                });
              });
            });
          });
        });
      });
      localStorage.setItem('initial_config', 'true');
    }
  }

  username: string = '';
  password: string = '';
  user: User;

  login() {
    this.userService.login(this.username, this.password).subscribe((data) => {
      if (data != null) {
        this.user = data;
        localStorage.setItem('profile', this.user.profile.name);
        this.router.navigate(['/main']);
      } else {
        alert('Error de inicio de sesion');
      }
    });
  }
}
