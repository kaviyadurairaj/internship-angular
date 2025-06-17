import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { CalendarComponent } from './app/calender.component';
import { AppShellComponent } from './app/app-shell.component';
import {LoginComponent} from './app/login.component';

bootstrapApplication(AppShellComponent, {
  providers: [
    provideRouter([
      {path:'', component: LoginComponent},
      { path: 'app-root', component: AppComponent },
      { path: 'calendar', component: CalendarComponent }
    ])
  ]
});
