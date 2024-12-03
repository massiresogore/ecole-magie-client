import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private router = inject(Router);
  authService:AuthService = inject(AuthService);
  isAuth = this.authService.isAuthenticated();
  formValue = {
    name: "",
    password: "",
  };
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });



  handleFormSubmit(){
    this.isAuth = true;
    this.formValue.name = this.loginForm?.value.username;
    this.formValue.password = this.loginForm?.value.password;
    //redirige vers home
    console.log(this.loginForm.value)
    // this.router.navigateByUrl('/').then(r => {
    //   r ? alert("Merci d'avoir remplie le formulaire") : alert("Probleme");
    // });
  }

}
