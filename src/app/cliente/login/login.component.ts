import { Component } from '@angular/core';
import { ReactiveFormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { LoginInterface } from '../../services/interfaces/auth';
import { CredentialsService } from '../../services/auth/credentials.service';
import { TokenService } from '../../services/auth/token.service';
import { UseStateService } from '../../services/auth/use-state.service';
import { PopupService } from '../../services/utils/popup.service';

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
    private router: Router,
    private useStateService: UseStateService,
    private popupService: PopupService
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

          this.popupService.loader("Cargando...", "Espere un momento");

          setTimeout(() => {
          this.tokenService.saveTokens(data.token, "234");
          this.useStateService.save(data.username, data.role);
          this.popupService.close();
          this.router.navigate(['/app/control-panel']);
          console.log(data);
          }, 1500)
        },
        error: (err: any) => {
          console.log(err);
          let message;
          if(err.error == "Invalid passworid") {
            message = "Contraseña incorrecta";
          }
          else if(err.error == "User not found") {
            message = "El usuario no existe, compruebe los datos o restrate";
          }
          else{
            message = err.error;
          }
          this.popupService.showMessage('Ups ha ocurrido un error', message, 'error');
        }
      });
    }else{
      console.log('Formulario no valido')
      alert('Formulario no valido')
    }

    
  }
}
