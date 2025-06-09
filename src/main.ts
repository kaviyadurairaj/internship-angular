import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { CalendarComponent } from './app/calender.component';
import { AppShellComponent } from './app/app-shell.component';

bootstrapApplication(AppShellComponent, {
  providers: [
    provideRouter([
      { path: '', component: AppComponent },
      { path: 'calendar', component: CalendarComponent }
    ])
  ]
});
