import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './feature/login/login.component';
import { RegistrationComponent } from './feature/registration/registration.component';
import { CoursesComponent } from './feature/courses/courses.component';
import { CourseComponent } from './feature/course/course.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {CoursesModule} from './feature/courses/courses.module';
import { InfoComponent } from './layout/info/info.component';
import { HeaderComponent } from './layout/header/header.component';
import { SearchComponent } from './layout/search/search.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    CoursesComponent,
    CourseComponent,
    InfoComponent,
    HeaderComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    CoursesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
