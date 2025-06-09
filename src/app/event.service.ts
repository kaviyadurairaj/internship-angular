import { Injectable } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  events: CalendarEvent[] = [];

  addEvent(title: string, date: string) {
    const eventDate = new Date(date);
    this.events.push({
      start: eventDate,
      title
    });
  }

  getEvents(): CalendarEvent[] {
    return this.events;
  }
}