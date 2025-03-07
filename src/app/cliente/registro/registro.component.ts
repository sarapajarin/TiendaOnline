import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { LoginInterface, UserInterface } from '../../services/interfaces/auth';
import { CredentialsService } from '../../services/auth/credentials.service';
import { TokenService } from '../../services/auth/token.service';
import { UseStateService } from '../../services/auth/use-state.service';

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
  registerForm: FormGroup

  constructor(
    private fr:FormBuilder,
    private credentialsService: CredentialsService,
    private tokenService: TokenService,
    private router: Router,
    private useStateService: UseStateService
  )
    {
    this.registerForm = this.fr.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      firtsName: ['', [Validators.required, Validators.minLength(3)]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      role:['', [Validators.required, Validators.minLength(3)]],
      address: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    })
  }
  onSubmit() {
    if(this.registerForm.valid && this.registerForm.value.password == this.registerForm.value.confirmPassword) {
      console.log(this.registerForm.value)
      window.location.href='/login'
      this.credentialsService.register(this.registerForm.value as UserInterface).subscribe({
        next:(data: any) => {
          console.log(data);
          this.credentialsService.login(this.registerForm.value as LoginInterface).subscribe({
                  next: (data: any) => {
                    this.tokenService.saveTokens(data.token, "234");
                    this.useStateService.save(data.username, data.role);
                    this.router.navigate(['/app/control-panel']);
                    console.log(data);
                    },
                    error: (err: any) => {
                      console.log(err);}
                  })
                 
        },
          
        error:(err: any) => console.log(err)
      });
    }else{
      console.log('Registro no valido')
      alert('Registro no valido')
    }
  }
}
