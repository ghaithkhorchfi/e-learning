import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCourseComponent } from './component/add-course/add-course.component';
import { AdminComponent } from './component/admin/admin.component';
import { CourseComponent } from './component/course/course.component';
import { EditCourseComponent } from './component/edit-course/edit-course.component';
import { EditUserComponent } from './component/edit-user/edit-user.component';
import { HomeComponent } from './component/home/home.component';
import { ProfilComponent } from './component/profil/profil.component';
import { QuestionComponent } from './component/question/question.component';
import { SignComponent } from './component/sign/sign.component';
import { SignupComponent } from './component/signup/signup.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [{path:'',component:HomeComponent},
{path:'welcome', component: WelcomeComponent},
{path:'question', component: QuestionComponent},
{path:'admin',component:AdminComponent ,canActivate:[AuthGuard] },
{path:'admin/addcourse',component:AddCourseComponent},
{path:'admin/signup',component:SignupComponent},
{path:'sign',component:SignComponent},
{path:'editcourse/:id',component:EditCourseComponent},
{path:'edituser/:id',component:EditUserComponent},
{path:'admin/profil',component:ProfilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
