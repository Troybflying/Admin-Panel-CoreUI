import { CommonModule, NgStyle } from '@angular/common';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonDirective, CardBodyComponent, CardComponent, CardGroupComponent, ColComponent, ContainerComponent, FormControlDirective, FormDirective, InputGroupComponent, InputGroupTextDirective, RowComponent, TextColorDirective } from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule,ReactiveFormsModule,ContainerComponent, RowComponent, ColComponent,
     CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent,
      InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective, NgStyle,FormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginObj : Login;

  constructor(private http: HttpClient,private router:Router){
    this.loginObj= new Login();
  }



 onLogin(){  
  this.router.navigateByUrl('dashboard');
  
  this.http.post('https://freeapi.miniprojectideas.com/api/User/Login', this.loginObj).subscribe((res:any)=>{
   if(res.result){
      alert("Login Succesfull")
    }
    else{
      alert(res.message)
    }
  }) 

 }
}


export class Login {
  
    EmailId: string;
    Password: string;
    constructor ( ) {
      this.EmailId='';
      this.Password='';

    }
  
}
