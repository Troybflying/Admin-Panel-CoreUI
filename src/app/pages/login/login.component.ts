import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private router:Router){}

 onSubmit(logindata:NgForm){   
  console.log(logindata.value);
   
   

  if(logindata.value.email=="abhi@gmail.com" && logindata.value.pass=="123"){
    sessionStorage.setItem('isLoggedIn','true'); 
    this.router.navigateByUrl('/dashboard')
  }
  else{
    sessionStorage.setItem('isLoggedIn','false');
    alert("Wrong Email or Password")
  }
}


}
