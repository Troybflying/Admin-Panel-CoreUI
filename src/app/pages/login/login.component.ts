import { CommonModule, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonDirective, CardBodyComponent, CardComponent, CardGroupComponent, ColComponent, ContainerComponent, FormControlDirective, FormDirective, InputGroupComponent, InputGroupTextDirective, RowComponent, TextColorDirective } from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule,ReactiveFormsModule,ContainerComponent, RowComponent, ColComponent,
     CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent,
      InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective, NgStyle],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private router:Router){}

 onSubmit(logindata:NgForm){   
  console.log(logindata.value);
  if(logindata.value.email=="abhi@gmail.com" && logindata.value.pass=="123"){
    sessionStorage.setItem('isLoggedIn','true'); 
   this.router.navigateByUrl('/dashboard');
  }
  else{
    sessionStorage.setItem('isLoggedIn','false');
    alert("Wrong Email or Password");
  }
}


}
