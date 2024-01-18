import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RegisterComponent } from './features/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireModule, FIREBASE_OPTIONS} from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { MatInputModule } from '@angular/material/input';

import { MatButtonModule } from '@angular/material/button';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { TrendingComponent } from './trending/trending.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchComponent } from './search/search.component';
import { LogOutComponent } from './features/log-out/log-out.component';
import { LoggedOutComponent } from './logged-out/logged-out.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    MainNavComponent,
    UpcomingComponent,
    TrendingComponent,
    SearchComponent,
    LogOutComponent,
    DetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    HttpClientModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
    provideFirebaseApp(()=> initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [
    {provide:FIREBASE_OPTIONS, useValue:environment.firebase}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
