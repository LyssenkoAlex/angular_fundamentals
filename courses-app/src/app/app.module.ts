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
import { ButtonComponent } from './layout/button/button.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SearchPipe} from "./layout/search/search.pipe";
import {CreateCourseComponent, DateConvert, DurationConvert} from './feature/create-course/create-course.component';
import {SharedModule} from "./shared/shared.module";
import { PasswordToggleDirective } from './validators/password-toggle.directive';



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
    ButtonComponent,
    SearchPipe,
    CreateCourseComponent,
    DurationConvert,
    DateConvert,
    PasswordToggleDirective,
  ],
    imports: [
        BrowserModule,
        FontAwesomeModule,
        CoursesModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
