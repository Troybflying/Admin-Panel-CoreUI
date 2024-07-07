import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, TableDirective, TableColorDirective, TableActiveDirective, BorderDirective, AlignDirective, FormDirective, FormLabelDirective, FormControlDirective, FormFeedbackComponent, InputGroupTextDirective, InputGroupComponent, ListGroupItemDirective, ListGroupDirective, ButtonDirective, FormCheckLabelDirective, FormCheckInputDirective, FormCheckComponent, FormSelectDirective, ButtonModule } from '@coreui/angular';


@Component({
  selector: 'app-editattendance',
  standalone: true,
  imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, 
    TableDirective, TableColorDirective, TableActiveDirective, BorderDirective, AlignDirective, FormsModule, 
    FormDirective, FormLabelDirective, FormControlDirective, FormFeedbackComponent, InputGroupComponent,
     InputGroupTextDirective, FormSelectDirective, FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective,
      ButtonDirective, ListGroupDirective,ListGroupItemDirective,CommonModule,ButtonDirective],
  templateUrl: './editattendance.component.html',
  styleUrl: './editattendance.component.scss'
})
export class EditattendanceComponent {

  enableState : { [key: string]: string } = {
    '1' : 'true',
    '2' : 'true',
    '3' : 'true',
    '4' : 'true',
  };

  editButton(event:any){
  this.enableState[event.target.id]=this.enableState[event.target.id]==='true'?'false' :'true'  ; 
   
    
    console.log(event.target.id);
    console.log(typeof(event.target.id));
    
  }

  attendanceData: { [key: string]: string } = {
    '1' : 'present',
    '2' : 'present',
    '3' : 'present',
    '4' : 'present',
  };

  onSubmit(attendancedata:NgForm){
    if(attendancedata.valid){   
      let cnf=confirm("Submit Attendance ??");
      const abc = cnf==true ? console.log(attendancedata.value):console.log("False");
    }
    else{
      alert("Check Again"); 
    }
  }
 


  colorRow(val:string){
    if(val === 'present'){
      return 'success';
    }
    else if (val === 'absent'){
        return 'danger';
    }
    else{
      return '';
    }
  }

  

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
      "id":'4',
      "name":"drew",
      "roll_no":"04"
    }
  ]

}
