import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { EventService } from './event.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heading = 'EVENT TRACKER';
  eventTitle = '';
  eventDate = '';
  
  constructor(private router: Router, public eventService: EventService) {}

  addevent(form: NgForm) {
    if (form.valid) {
      this.eventService.addEvent(this.eventTitle, this.eventDate);
      form.reset();
    }
  }

  gotocalender() {
    this.router.navigate(['/calendar']);
  }
}
