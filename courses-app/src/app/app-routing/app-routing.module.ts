import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {AuthorizedGuard} from "../auth/authorized.guard";
import {NotAuthorizedGuard} from "../auth/not-authorized.guard";
import {AdminGuard} from "../auth/admin.guard";
import {CoursesResolverResolver} from "../resolvers/courses-resolver.resolver";
import {AuthorsResolverResolver} from "../resolvers/authors-resolver.resolver";
import {EditCourseResolverResolver} from "../resolvers/edit-course-resolver.resolver";


@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'login',
        canActivate: [NotAuthorizedGuard],
        loadChildren: () => import('../feature/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'registration',
        canActivate: [NotAuthorizedGuard],
        loadChildren: () => import('../feature/registration/registration.module').then(m => m.RegistrationModule)
      },
      {
        path: 'courses',
        canLoad: [AuthorizedGuard],
        loadChildren: () => import('../feature/courses/courses.module').then(m => m.CoursesModule),
        resolve: {preFetchData: CoursesResolverResolver}
      },
      {
        path: 'courses/add',
        canActivate: [AdminGuard],
        loadChildren: () => import('../feature/create-course/create-course.module').then(m => m.CreateCourseModule)
      },
      {
        path: 'courses/:id',
        canLoad: [AuthorizedGuard],
        loadChildren: () => import('../feature/course-details/course-details.module').then(m => m.CourseDetailsModule)
      },
      {
        path: 'courses/edit/:id',
        canActivate: [AdminGuard],
        loadChildren: () => import('../feature/edit-course/edit-course.module').then(m => m.EditCourseModule),
        resolve: {preFetchData: EditCourseResolverResolver}
      },
      {
        path: 'authors',
        loadChildren: () => import('../feature/authors/authors.module').then(m => m.AuthorsModule),
        // resolve: {preFetchData: AuthorsResolverResolver}
      },
      {path: '**', redirectTo: 'login'}
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})

export class AppRoutingModule {
}
