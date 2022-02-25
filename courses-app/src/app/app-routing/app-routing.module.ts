import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";



@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'login', loadChildren: () => import('../feature/login/login.module').then(m => m.LoginModule)},
      { path: 'registration', loadChildren: () => import('../feature/registration/registration.module').then(m => m.RegistrationModule)},
      { path: 'courses/add', loadChildren: () => import('../feature/create-course/create-course.module').then(m => m.CreateCourseModule)},
      { path: 'courses', loadChildren:() => import('../feature/courses/courses.module').then(m => m.CoursesModule)},
      { path: 'authors', loadChildren:() => import('../feature/authors/authors.module').then(m => m.AuthorsModule)},
      { path: 'courses/:id', loadChildren:() => import('../feature/course-details/course-details.module').then(m => m.CourseDetailsModule) },
      { path: 'courses/edit/:id', loadChildren:() => import('../feature/edit-course/edit-course.module').then(m => m.EditCourseModule) },
      { path: '**', redirectTo: 'login' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})

export class AppRoutingModule { }
