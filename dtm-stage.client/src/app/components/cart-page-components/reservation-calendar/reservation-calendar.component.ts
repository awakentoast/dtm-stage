import { Component, Injectable } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';

@Component({
  selector: 'app-reservation-calendar',
  standalone: true,
  imports: [
    DateInputsModule
  ],
  templateUrl: './reservation-calendar.component.html',
  styleUrl: './reservation-calendar.component.css'
})
@Injectable({
  providedIn: "root"
})
export class ReservationCalendarComponent {

}
