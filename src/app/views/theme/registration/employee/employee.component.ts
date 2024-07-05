import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { ReactiveFormsModule, FormsModule, NgForm } from '@angular/forms';
import { DocsExampleComponent } from '@docs-components/public-api';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, 
  CardBodyComponent, FormControlDirective, FormDirective, FormLabelDirective, FormSelectDirective,
   FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective, ButtonDirective, ColDirective,
    InputGroupComponent, InputGroupTextDirective,FormFeedbackComponent,ListGroupDirective,
    ListGroupItemDirective,FormFloatingDirective,GutterDirective } from '@coreui/angular';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, 
    CardBodyComponent, DocsExampleComponent, FormControlDirective, ReactiveFormsModule, FormsModule, 
    FormDirective, FormLabelDirective, FormSelectDirective, FormCheckComponent, FormCheckInputDirective,
     FormCheckLabelDirective, ButtonDirective, ColDirective, InputGroupComponent, InputGroupTextDirective,
     FormFeedbackComponent, ListGroupDirective, ListGroupItemDirective,
      FormFloatingDirective, NgStyle, GutterDirective],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent {
  customStylesValidated = false;
  browserDefaultsValidated = false;
  tooltipValidated = false;

  constructor () {}

  ngOnInit(): void { }

  onSubmit(employeedata:NgForm) {
    this.customStylesValidated = true;
    console.log(employeedata.value);
    if(employeedata.valid){
      alert("Registration Sucessfull !!");
    }

  }
  onReset() {
    this.customStylesValidated = false;
    console.log('Reset... 1');
  }

  anio:number= new Date().getFullYear();

}
