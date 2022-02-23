import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  @Input() verified:boolean = false

  ngOnInit(): void {
  }
  @Output() newItemEvent = new EventEmitter<boolean>();

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
    console.log('model: ', this.model)
    this.newItemEvent.emit(true)

  }


}
