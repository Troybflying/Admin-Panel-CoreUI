import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';
import { ReactiveFormsModule, FormsModule, NgForm } from '@angular/forms';
import { DocsExampleComponent } from '@docs-components/public-api';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, 
  CardBodyComponent, FormControlDirective, FormDirective, FormLabelDirective, FormSelectDirective,
   FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective, ButtonDirective, ColDirective,
    InputGroupComponent, InputGroupTextDirective,FormFeedbackComponent,ListGroupDirective,
    ListGroupItemDirective,FormFloatingDirective,GutterDirective, 
    TooltipDirective} from '@coreui/angular';




@Component({
  selector: 'app-student',
  standalone: true,
  imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, 
    CardBodyComponent, DocsExampleComponent, FormControlDirective, ReactiveFormsModule, FormsModule, 
    FormDirective, FormLabelDirective, FormSelectDirective, FormCheckComponent, FormCheckInputDirective,
     FormCheckLabelDirective, ButtonDirective, ColDirective, InputGroupComponent, InputGroupTextDirective,
     FormFeedbackComponent, ListGroupDirective, ListGroupItemDirective,
      FormFloatingDirective, NgStyle, GutterDirective,TooltipDirective],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent implements OnInit{

  StudentRegObj : StudentReg;

 

  customStylesValidated = false;
  browserDefaultsValidated = false;
  tooltipValidated = false;

  constructor () {
    this.StudentRegObj = new StudentReg;
  }


  

  ngOnInit(): void { }

  onSubmit() {
    console.log(this.StudentRegObj);
    
    this.customStylesValidated = true;
    
    
  }

  onReset() {
    this.customStylesValidated = false;
    console.log('Reset... 1');
  }
  
   anio:number= new Date().getFullYear(); // used for getting current date and used in selecting DOB field.

}

export class StudentReg{
     fname : string;
     mname : string;
     lname : string;
     placeofbirth  : string;
     dob : string;
     fathername : string;
     fatheroccupation : string;
     fathernationality : string;
     mothername : string;
     motheroccupation : string;
     mothernationality : string;
     address : string;
     country : string;
     city : string;
     state : string;
     pincode : string;
     mobilenumber : string;
     mobilenumber1 : string;
     email : string;
     _class : string;
     invalidCheck : string;

     constructor ( ) {
      this.fname = '';
      this.mname = '';
      this.lname = '';
      this.placeofbirth = '';
      this.dob = '';
      this.fathername = '';
      this.fatheroccupation = '';
      this.fathernationality = '';
      this.mothername = '';
      this.motheroccupation = '';
      this.mothernationality = '';
      this.address = '';
      this.country = '';
      this.city = '';
      this.state = '';
      this.pincode = '';
      this.mobilenumber ='';
      this.mobilenumber1 = '';
      this.email = '';
      this._class = '';
      this.invalidCheck = '';
 
    }

}
