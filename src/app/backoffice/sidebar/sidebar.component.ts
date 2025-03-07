import { Component, OnInit } from '@angular/core';
import { SidebarStatusService } from '../../services/status/sidebar-status.service';
import { Router } from '@angular/router';
import { TokenService } from '../../services/auth/token.service';
import { UseStateService } from '../../services/auth/use-state.service';
import { PopupService } from '../../services/utils/popup.service';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit{

  isActiveMenuHeader: boolean = true;
  
  constructor(
    private sidebarStatusService: SidebarStatusService,
    private router: Router,
    private popupService: PopupService,
    private tokenService: TokenService,
    private useStateService: UseStateService
  ) { }
  ngOnInit(): void {
    this.sidebarStatusService.status$.subscribe(status => this.isActiveMenuHeader = status
    );
  }


closeSession(): void {
  this.popupService.loader(
    "Cerrando sesión",
    "Vuelve pronto"
  );



this.tokenService.removeToken();
this.useStateService.removeSession();
setTimeout(() => {
  this.popupService.close();
  this.router.navigate(["/login"]);
})
}
}
