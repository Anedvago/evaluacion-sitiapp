import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Profile } from 'src/app/models/profile';
import { User } from 'src/app/models/user';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.css'],
})
export class UserManagerComponent implements OnInit {
  constructor(
    private profileService: ProfileService,
    private userService: UserService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.userService.listUsers().subscribe((data) => {
      this.users = data;
    });
    this.profileService.listProfiles().subscribe((data) => {
      if (data.length > 0) {
        this.profiles = data;
      } else {
      }
    });
  }

  users: User[] = [];
  profiles: Profile[] = [];

  typeModal: string = 'create';

  id: number = 0;
  name: string = '';
  surname: string = '';
  user: string = '';
  password: string = '';
  profile: number = 0;

  usernameFind = '';

  userCheck: User;

  cleanForm() {
    this.id = 0;
    this.name = '';
    this.surname = '';
    this.user = '';
    this.password = '';
    this.profile = 0;
  }
  cleanFormSearch() {
    this.usernameFind = '';
  }

  insertUser() {
    let profile: Profile = new Profile(this.profile, '');
    let user: User = new User(
      0,
      this.name,
      this.surname,
      this.user,
      this.password,
      profile
    );

    this.userService.insertUser(user).subscribe((data) => {
      this.userService.listUsers().subscribe((data) => {
        this.users = data;
        this.cleanForm();
      });
    });
  }
  updateUser() {
    let user: User = new User(
      this.id,
      this.name,
      this.surname,
      this.user,
      this.password,
      { id: this.profile, name: '' }
    );
    this.userService.updateUser(user).subscribe((data) => {
      this.userService.listUsers().subscribe((data) => {
        this.users = data;
        this.cleanForm();
      });
    });
  }

  openModal(content: any) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

  findUser() {
    this.userService.findUserByUsername(this.usernameFind).subscribe((data) => {
      this.users = [data[0]];
    });
  }
  deleteFilters() {
    this.userService.listUsers().subscribe((data) => {
      this.users = data;
      this.cleanFormSearch();
    });
  }

  selectUser(username: string) {
    this.userService.findUserByUsername(username).subscribe((data) => {
      this.userCheck = data[0];
      this.setUser(this.userCheck);
    });
  }

  setUser(user: User) {
    this.id = user.id;
    this.name = user.name;
    this.surname = user.surname;
    this.user = user.user;
    this.password = user.password;
    this.profile = user.profile.id;
    console.log(this.profile);
  }

  setTypeModal(typeModal: string) {
    this.typeModal = typeModal;
    if (typeModal == 'create') {
      this.cleanForm();
    }
  }

  deleteUser() {
    this.userService.deleteUser(this.id).subscribe(() => {
      this.userService.listUsers().subscribe((data) => {
        this.users = data;
        this.cleanForm();
      });
    });
  }
}
