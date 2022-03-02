import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from "../../auth/services/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  @Input() verified: boolean = false

  ngOnInit(): void {
  }

  @Output() newItemEvent = new EventEmitter<boolean>();

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.login(this.model.email, this.model.password)
  }

  logout () {
    this.authService.logout()
  }
}
