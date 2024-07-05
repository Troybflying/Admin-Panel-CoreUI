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

  customStylesValidated = false;
  browserDefaultsValidated = false;
  tooltipValidated = false;

  constructor () {}

  ngOnInit(): void { }

  onSubmit(studentdata:NgForm) {
    this.customStylesValidated = true;
    console.log(studentdata.value);
    if(studentdata.valid){
      alert("Registration Sucessfull !!");
    }

  }
  onReset() {
    this.customStylesValidated = false;
    console.log('Reset... 1');
  }

   anio:number= new Date().getFullYear();


}
