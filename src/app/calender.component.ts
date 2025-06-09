import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CalendarEvent } from 'angular-calendar';
import { CalendarWrapperModule } from './calendar-wrapper.module';
import { EventService } from './event.service';

@Component({
  selector: 'calendar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CalendarWrapperModule
  ],
  templateUrl: './calender.component.html'
})
export class CalendarComponent {
  viewDate: Date = new Date();
  constructor(public eventService: EventService) {}

  get events(): CalendarEvent[] {
    return this.eventService.getEvents();
  }
}
