import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {CounterService} from "../../../../services/shared/counter.service";

@Component({
	selector: 'app-timer-counter',
	templateUrl: './timer-counter.component.html',
	styleUrls: [ './timer-counter.component.scss' ]
})
export class TimerCounterComponent implements OnInit {
	displayText: string;
	checkedIn = false;
	@Output() isUserCheckedIn = new EventEmitter();
	counter: any;

	constructor(private counterService: CounterService, private router: Router) {}

	changeStatus(button) {
		this.counterService.changeUserStatus();
		this.counter = this.counterService.getCounter();
		this.displayText = this.counterService.getButtonText();
		this.checkedIn = this.counterService.getStartStatus();

		this.isUserCheckedIn.emit(true);
	}

	verifyStatusAndExit(status) {
		// At the moment this in touch with the time tracking not the task tracking
		// Modify this to be connected with the task tracking
		if (status.textContent === 'Break' || status.textContent === 'Resume') {
			alert('Please stop current working task!');
		}
	}

	ngOnInit(): void {
		this.isUserCheckedIn.emit(this.counterService.getStartStatus());

		this.counter = this.counterService.counter;

		this.displayText = this.counterService.getButtonText();
	}
}