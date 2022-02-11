import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  imagePath = '/assets/images/logo.svg'
  constructor() { }
  @Input() logOut?: string = 'Logout';
  @Input() userName?: string = 'Test user';
  @Input() title?: string = 'Courses';
  ngOnInit(): void {
  }

}
