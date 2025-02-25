import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-registro',
  imports: [
    ReactiveFormsModule,
    RouterModule,
    RouterLink
  ],
  standalone: true,
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent {
  loginForm: FormGroup

  constructor(private fr:FormBuilder){
    this.loginForm = this.fr.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    })
  }
  onSubmit() {
    if(this.loginForm.valid && this.loginForm.value.password == this.loginForm.value.confirmPassword) {
      console.log(this.loginForm.value)
      window.location.href='/login'
    }else{
      console.log('Registro no valido')
      alert('Registro no valido')
    }
  }
}
