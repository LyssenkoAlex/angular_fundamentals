import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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
  @Output() newItemEvent = new EventEmitter<boolean>();

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
    console.log('model: ', this.model)
    this.newItemEvent.emit(true)

  }



}
