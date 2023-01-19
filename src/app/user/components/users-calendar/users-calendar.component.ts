import { CalendarHeader } from './header/calendar-header.component';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-users-calendar',
  templateUrl: './users-calendar.component.html',
  styleUrls: ['./users-calendar.component.scss'],
})
export class UsersCalendarComponent implements OnInit {
  calendarHeader = CalendarHeader;
  selected: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  @Output() onDatePicked = new EventEmitter<any>();

  public valueChanged(): void {
    this.onDatePicked.emit(this.selected);
  }
}
