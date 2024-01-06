import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './features/login-form/login-form.component';
import { RegisterComponent } from './features/register/register.component';
import { HomeComponent } from './home/home.component'
import{AngularFireAuthGuard,redirectLoggedInTo,redirectUnauthorizedTo,
} from '@angular/fire/compat/auth-guard'


const redirectUnauthorizedToLogin = ()=>redirectUnauthorizedTo(['login']); 

const routes: Routes = [
  {path:'login',component:LoginFormComponent},
  {path:'register',component:RegisterComponent},
  {path:'',
    canActivate:[AngularFireAuthGuard],
    data:{authGuardPipe:redirectUnauthorizedToLogin},
    children:[
      {path:'',component:HomeComponent},
      {path:'home',component:HomeComponent},
    ]
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
