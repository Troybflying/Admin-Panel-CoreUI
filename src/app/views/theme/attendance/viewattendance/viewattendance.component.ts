import { AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ChartData } from 'chart.js';
import { ChartjsComponent } from '@coreui/angular-chartjs';
import { ReactiveFormsModule, FormsModule, NgForm } from '@angular/forms';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, FormControlDirective, FormDirective, FormLabelDirective, FormSelectDirective, FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective, ButtonDirective, ColDirective, InputGroupComponent, InputGroupTextDirective, WidgetStatBComponent, WidgetStatFComponent, WidgetStatCComponent, TemplateIdDirective, ProgressBarDirective, ProgressComponent } from '@coreui/angular';

import { IconDirective } from '@coreui/icons-angular';

@Component({
  selector: 'app-viewattendance',
  standalone: true,
  imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, 
    FormControlDirective, FormDirective, FormLabelDirective, FormSelectDirective, FormCheckComponent,
     FormCheckInputDirective, FormCheckLabelDirective, ButtonDirective, ColDirective, InputGroupComponent, 
     InputGroupTextDirective,ReactiveFormsModule,FormsModule,ChartjsComponent,CardComponent,IconDirective,
     WidgetStatBComponent,WidgetStatFComponent,WidgetStatCComponent,TemplateIdDirective,ProgressBarDirective,ProgressComponent],
  templateUrl: './viewattendance.component.html',
  styleUrl: './viewattendance.component.scss'
})
export class ViewattendanceComponent {
  onSearch(searchdata:NgForm){
    console.log(searchdata.value)
  }

  options = {
    maintainAspectRatio: false
  };

  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  chartBarData: ChartData = {
    labels: [...this.months].slice(0, 7),
    datasets: [
      {
        label: 'Presents',
        backgroundColor: 'lightgreen',
        data: [25, 20, 12, 30, 17, 22, 9, 12]
      }
    ]
  };

  // chartBarOptions = {
  //   maintainAspectRatio: false,
  // };


  chartPieData: ChartData = {
    labels: ['Absent', 'Present'],
    datasets: [
      {
        data: [75, 125],
        backgroundColor: ['maroon', 'green'],
        hoverBackgroundColor: ['maroon', 'green']
      }
    ]
  };

  // chartPieOptions = {
  //   aspectRatio: 1,
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   radius: '100%'
  // };

  students=[
    {
      "id":'1',
      "name":"Andy",
      "roll_no":"01"
    },
    {
      "id":'2',
      "name":"Bella",
      "roll_no":"02"
    },
    {
      "id":'3',
      "name":"Candice",
      "roll_no":"03"
    },
    {
      "id":'3',
      "name":"drew",
      "roll_no":"04"
    }
  ]

}
