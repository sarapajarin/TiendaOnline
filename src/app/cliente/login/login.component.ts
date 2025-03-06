import { Component } from '@angular/core';
import { ReactiveFormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { LoginInterface } from '../../services/interfaces/auth';
import { CredentialsService } from '../../services/auth/credentials.service';
import { TokenService } from '../../services/auth/token.service';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    RouterModule,
    RouterLink
  ],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
loginForm: FormGroup
  constructor(
    private fb: FormBuilder, 
    private credentialsService: CredentialsService,
    private tokenService: TokenService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }
  onSubmit() {
    if(this.loginForm.valid) {
      window.location.href='/app'
      this.credentialsService.login(this.loginForm.value as LoginInterface).subscribe({
        next: (data: any) => {
          this.tokenService.saveTokens(data.token, "234");
          this.router.navigate(['/app/control-panel']);
          console.log(data);
        },
        error: (err: any) => {
          console.log(err);
        }
      });
    }else{
      console.log('Formulario no valido')
      alert('Formulario no valido')
    }

    
  }
}
