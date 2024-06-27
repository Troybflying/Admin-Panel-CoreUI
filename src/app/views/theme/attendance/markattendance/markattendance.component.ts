import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, TableDirective, TableColorDirective, TableActiveDirective, BorderDirective, AlignDirective, FormDirective, FormLabelDirective, FormControlDirective, FormFeedbackComponent, InputGroupTextDirective, InputGroupComponent, ListGroupItemDirective, ListGroupDirective, ButtonDirective, FormCheckLabelDirective, FormCheckInputDirective, FormCheckComponent, FormSelectDirective, ButtonModule } from '@coreui/angular';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-markattendance',
  standalone: true,
  imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, 
    TableDirective, TableColorDirective, TableActiveDirective, BorderDirective, AlignDirective, FormsModule, 
    FormDirective, FormLabelDirective, FormControlDirective, FormFeedbackComponent, InputGroupComponent,
     InputGroupTextDirective, FormSelectDirective, FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective,
      ButtonDirective, ListGroupDirective,ListGroupItemDirective,CommonModule,ButtonDirective,RouterLink],
  templateUrl: './markattendance.component.html',
  styleUrl: './markattendance.component.scss'
})
export class MarkattendanceComponent {

  constructor(private router: Router) {}

  attendanceData: { [key: string]: string } = {
    '1' : 'present',
    '2' : 'present'
  };
 
onSubmit(attendancedata:NgForm){
  if(attendancedata.valid){   
    let cnf=confirm("Submit Attendance ??");
    if(cnf == true){
      console.log(attendancedata.value);
      this.router.navigateByUrl('/theme/editattendance');
    }
    else{
      console.log("False");
    }
  }
  else{
    alert("Check Again"); 
  }
}
setAllRows(value: string) {
  for (let key in this.attendanceData) {
    this.attendanceData[key] = value;
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
onSearch(searchdata:NgForm){
  console.log(searchdata.value); 
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
    "id":'3',
    "name":"drew",
    "roll_no":"04"
  }
]

}
