import { Injectable } from '@angular/core';

import  Swal  from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  showMessage(title: string, message: string, icon: 'success' | 'warning' | 'error' | 'info' | 'question' = 'info'): void {
    Swal.fire({
      title:title,
      text: message,
      icon: icon,
      confirmButtonText: 'Cerrar notificación'
    });
  }
    loader(title:string = 'Cargando...', message: string = 'Por favor espere'
    ): void {
      Swal.fire({
        title: title,
        text: message,
        allowEscapeKey: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });
   }

async showConfirmation(title: string, message: string, confirmButtonText: string = "Aceptar", cancelButtomText: string = "Cancelar"): Promise<boolean> {
  
  const result = await Swal.fire({
    title: title,
    text: message,
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: confirmButtonText,
    cancelButtonText: cancelButtomText
  });
  
  return result.isConfirmed;
}


close(): void {
  Swal.close();
  }  
}
