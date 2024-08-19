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

   EmployeeRegObj : EmployeeReg;
  
  customStylesValidated = false;
  browserDefaultsValidated = false;
  tooltipValidated = false;

  constructor () { 
    this.EmployeeRegObj = new EmployeeReg;
  }

  ngOnInit(): void { }

  onSubmit() {
    this.customStylesValidated = true;
    console.log(this.EmployeeRegObj);
    
   

  }
  onReset() {
    this.customStylesValidated = false;
    console.log('Reset... 1');
  }

  anio:number= new Date().getFullYear();

}
export class EmployeeReg{

    fname : string;
     mname : string;
     lname : string;
     placeofbirth  : string;
     dob : string;
     martialstatus : string;
     gender : string;
     qualifications : string;
     choosefile : string;
     address : string;
     country : string;
     state : string;
     city : string;
     pincode : string;
     mobilenumber : string;
     mobilenumber1 : string;
     email : string;
     invalidCheck : string;

     constructor ( ) {
      this.fname = '';
      this.mname = '';
      this.lname = '';
      this.placeofbirth = '';
      this.dob = '';
      this.martialstatus = '';
      this.gender = '';
      this.qualifications = '';
      this.choosefile = '';
      this.address = '';
      this.country = '';
      this.state = '';
      this.city = '';
      this.pincode = '';
      this.mobilenumber ='';
      this.mobilenumber1 = '';
      this.email = '';
      this.invalidCheck = '';
 
    }


}
