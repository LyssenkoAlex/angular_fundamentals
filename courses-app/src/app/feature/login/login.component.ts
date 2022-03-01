import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../../auth/services/auth.service";
import {first} from 'rxjs/operators';
import {Router, ActivatedRoute} from '@angular/router';


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

  constructor(private authService: AuthService, private route: ActivatedRoute,
              private router: Router,) {
  }

  onSubmit() {
    console.log('model: ', this.model)

    this.authService.login(this.model.email, this.model.password)

  }


}
