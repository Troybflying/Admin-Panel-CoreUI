import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonDirective, CardBodyComponent, CardComponent, CardGroupComponent, ColComponent, ContainerComponent, FormControlDirective, FormDirective, InputGroupComponent, InputGroupTextDirective, RowComponent, TextColorDirective } from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [FormsModule,RouterLink,ReactiveFormsModule,ContainerComponent, RowComponent, ColComponent,
    CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent,
     InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective, NgStyle],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {

  reg(resetData:NgForm){  
    console.log(resetData.value);  
   }
   
}
