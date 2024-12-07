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
  isSubmitted = false;
  formValue = {
    username: new FormControl<string>('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl<string>('', [Validators.required]),
    remember: new FormControl<boolean>(false),
  };
  loginForm: FormGroup = new FormGroup({
    username:this.formValue.username ,
    password:this.formValue.password ,
    remember:this.formValue.remember ,
  });



  handleFormSubmit(){
    this.isAuth = true;
    this.isSubmitted = true;
    if(this.loginForm.invalid) return;
    console.log(this.loginForm.value);
    //redirige vers home
    // this.router.navigateByUrl('/').then(r => {
    //   r ? alert("Merci d'avoir remplie le formulaire") : alert("Probleme");
    // });
  }

}
