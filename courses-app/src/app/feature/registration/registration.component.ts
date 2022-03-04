import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../auth/services/auth.service";
import {UserModel} from "../../models/UserModel";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  model: any = {};
  @Input() verified:boolean = false

  ngOnInit(): void {
  }

  constructor(private authService: AuthService) {}

  onSubmit() {

    const user:UserModel = {name:this.model.lastName, email:this.model.email, password:this.model.password, role:''}
    this.authService.register(user)
  }

}
