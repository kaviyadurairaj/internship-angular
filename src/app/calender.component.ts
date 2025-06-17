import { Component,Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CalendarEvent } from 'angular-calendar';
import { CalendarWrapperModule } from './calendar-wrapper.module';
import { EventService } from './event.service';
import { addMonths, subMonths } from 'date-fns';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'calendar',
  standalone: true,
  imports: [CommonModule, RouterModule, CalendarWrapperModule,FormsModule,],
  templateUrl: './calender.component.html'
})
export class CalendarComponent {
  viewDate: Date = new Date();
  istoggled=false;

  constructor(public eventService: EventService,private render1:Renderer2) {}

  get events(): CalendarEvent[] {
    return this.eventService.getEvents();
  }

  previousMonth() {
    this.viewDate = subMonths(this.viewDate, 1);
  }

  nextMonth() {
    this.viewDate = addMonths(this.viewDate, 1);
  }
  
}
