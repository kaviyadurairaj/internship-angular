import { Injectable } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events: CalendarEvent[] = [];

  addEvent(title: string, date: string) {
    const eventDate = new Date(date);
    eventDate.setHours(0, 0, 0, 0);

    const newEvent: CalendarEvent = {
      id: this.events.length + 1,
      start: eventDate,
      title: title,
      allDay: true
    };

    this.events.push(newEvent);
  }

  getEvents(): CalendarEvent[] {
    return [...this.events]; 
  }
}
