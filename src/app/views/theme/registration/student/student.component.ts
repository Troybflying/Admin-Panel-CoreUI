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
import { HttpserviceService } from '../../../../httpservice.service';



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

  constructor (private httpService: HttpserviceService) {}

  ngOnInit(): void { }

  onSubmit(studentdata:NgForm) {
    this.customStylesValidated = true;
    console.log(studentdata.value);
    if(studentdata.valid){
      this.httpService.registerStudent(studentdata.value).subscribe(
        response => {
          
          console.log('Response:', response);
        },
        error => {
          console.error('Error:', error);
        }
      );
    }
  }

  onReset() {
    this.customStylesValidated = false;
    console.log('Reset... 1');
  }

   anio:number= new Date().getFullYear();


}
