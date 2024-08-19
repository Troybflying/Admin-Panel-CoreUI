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

  
  this.http.post('http://ec2-65-2-39-105.ap-south-1.compute.amazonaws.com:3000/be/Admin/login', this.loginObj).subscribe((res:any)=>{
   
    if(res){
      console.log(res.token);
      localStorage.setItem('loginToken', res.token);
      this.router.navigateByUrl('dashboard');
    }
    else{
      alert(res.message);
    }
  }) 

 }
}


export class Login {
  
    email: string;
    password: string;
    constructor ( ) {
      this.email='';
      this.password='';

    }
  
}
