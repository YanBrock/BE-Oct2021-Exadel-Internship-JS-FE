import { Component, OnInit } from '@angular/core';
import { Calendar, CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import { formatDate } from '@fullcalendar/angular';
import googleCalendarPlugin from '@fullcalendar/interaction'; // a plugin!

@Component({
	selector: 'app-datepicker',
	templateUrl: './datepicker.component.html',
	styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

	weekendType: string = "Mon-Fri";

	calendarOptions: CalendarOptions = {
		initialView: 'dayGridMonth',
		dateClick: this.handleDateClick.bind(this), // bind is important!
		events: [
			// { title: 'event 1', date: '2021-12-01' },
			// { title: 'event 2', date: '2021-12-01' },
			// { title: 'event 3', date: '2021-12-01' },
			// { title: 'event 4', date: '2021-12-01' },
			// { title: 'event 5', date: '2021-12-01' },
			// { title: 'event 6', date: '2021-12-01' },
			// { title: 'event 7', date: '2021-12-02' },
			// { title: 'event 8', date: '2021-12-02' },
		],
		weekends: false // initial value
	};

	strng = formatDate(new Date(), {
		month: 'long',
		year: 'numeric',
		day: 'numeric',
	});



	constructor() { }



	handleDateClick(arg) {
		alert('date click! ' + arg.dateStr)
	}

	toggleWeekends() {
		this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
		this.weekendType === "Mon-Fri" ? this.weekendType = "Sun-Sat" : this.weekendType = "Mon-Fri"

	}

	ngOnInit(): void {
		console.log(this.strng);
	}
}