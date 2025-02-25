import { Component } from '@angular/core';
import { GraphicPrimeraCajaComponent } from "../caja1/graphic-primera-caja/graphic-primera-caja.component";
import { GraphicTerceraCajaComponent } from "../graphic-tercera-caja/graphic-tercera-caja.component";
import { GraphicPequeno1Component } from '../caja1/graphic-pequeno1/graphic-pequeno1.component';
import { GraphicPequeno2Component } from "../caja1/graphic-pequeno2/graphic-pequeno2.component";
import { GraphicPequeno3Component } from "../caja1/graphic-pequeno3/graphic-pequeno3.component";




@Component({
  selector: 'app-graphics',
  imports: [GraphicPrimeraCajaComponent, GraphicTerceraCajaComponent, GraphicPequeno1Component, GraphicPequeno2Component, GraphicPequeno3Component],
  templateUrl: './graphics.component.html',
  styleUrl: './graphics.component.scss'
})
export class GraphicsComponent {

}
