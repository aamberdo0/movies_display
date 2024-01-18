import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './features/login-form/login-form.component';
import { RegisterComponent } from './features/register/register.component';
import { HomeComponent } from './home/home.component'
import{AngularFireAuthGuard,redirectLoggedInTo,redirectUnauthorizedTo,
} from '@angular/fire/compat/auth-guard'
import { TrendingComponent } from './trending/trending.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { SearchComponent } from './search/search.component';
import { LogOutComponent } from './features/log-out/log-out.component';
import { LoggedOutComponent } from './logged-out/logged-out.component';
import { DetailsComponent } from './details/details.component';


const redirectUnauthorizedToLogin = ()=>redirectUnauthorizedTo(['login']); 

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'upcoming', component: UpcomingComponent,
  canActivate: [AngularFireAuthGuard],
  data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'trending', component: TrendingComponent,
  canActivate: [AngularFireAuthGuard],
  data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'search', component:SearchComponent,
  canActivate: [AngularFireAuthGuard],
  data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'logout', component:LogOutComponent},
  { path: 'logged-out', component:LoggedOutComponent},
  { path: 'details/:id', component: DetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

