import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-successpage',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './successpage.component.html',
  styleUrl: './successpage.component.scss',
  animations: [
    trigger('fadeIn', [
      state('void', style({
        opacity: 0
      })),
      state('*', style({
        opacity: 1
      })),
      transition('void => *', [
        animate('1s ease-in')
      ])
    ])
  ]
})
export class SuccesspageComponent {

}
