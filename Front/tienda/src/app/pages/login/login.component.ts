import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {

  }

  username: string = ""
  password: string = ""
  user: User

  login() {
    this.userService.login(this.username, this.password).subscribe((data) => {

      if (data != null) {
        this.user = data
        localStorage.setItem("profile", this.user.profile.name)
        this.router.navigate(["/main"]);
      } else {
        alert("Error de inicio de sesion")
      }

    })

  }

}
