import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ItemComponent } from './component/item/item.component';
import { HomeComponent } from './component/home/home.component';
import { FeatureComponent } from './component/feature/feature.component';
import { CourseComponent } from './component/course/course.component';
import { CounterComponent } from './component/counter/counter.component';
import { EventComponent } from './component/event/event.component';
import { TeamComponent } from './component/team/team.component';
import { NewComponent } from './component/new/new.component';
import { NewsletComponent } from './component/newslet/newslet.component';
import { MembreComponent } from './component/membre/membre.component';
import { LessonComponent } from './component/lesson/lesson.component';
import { ArticleComponent } from './component/article/article.component';
import { SignComponent } from './component/sign/sign.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BannerComponent } from './component/banner/banner.component';
import { CourseItemComponent } from './component/course-item/course-item.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AdminComponent } from './component/admin/admin.component';
import { ProfilComponent } from './component/profil/profil.component';
import { AdminStudentComponent } from './component/admin-student/admin-student.component';
import { AdminCourseComponent } from './component/admin-course/admin-course.component';
import { AdminTeacherComponent } from './component/admin-teacher/admin-teacher.component';
import { SignupComponent } from './component/signup/signup.component';
import { AddCourseComponent } from './component/add-course/add-course.component';
import { EditCourseComponent } from './component/edit-course/edit-course.component';
import { DhashboardTeacherComponent } from './component/dhashboard-teacher/dhashboard-teacher.component';
import { DhashboardStudentComponent } from './component/dhashboard-student/dhashboard-student.component';
import { EditUserComponent } from './component/edit-user/edit-user.component';
import { AuthGuard } from './guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ItemComponent,
    HomeComponent,
    FeatureComponent,
    CourseComponent,
    CounterComponent,
    EventComponent,
    TeamComponent,
    NewComponent,
    NewsletComponent,
    MembreComponent,
    LessonComponent,
    ArticleComponent,
    SignComponent,
    BannerComponent,
    CourseItemComponent,
    DashboardComponent,
    AdminComponent,
    ProfilComponent,
    AdminStudentComponent,
    AdminCourseComponent,
    AdminTeacherComponent,
    SignupComponent,
    AddCourseComponent,
    EditCourseComponent,
    DhashboardTeacherComponent,
    DhashboardStudentComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [ AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
