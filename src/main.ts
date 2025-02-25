/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Chart, ArcElement, Tooltip, PieController, DoughnutController, Legend, LineController, CategoryScale, LinearScale, PointElement, LineElement, Filler } from 'chart.js';
//tenemos este archivo gracias a standalone true en app.module; sino tendriamos que ponerlo en el ts de cada componente
//aqui configuramos los charts
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


  //linea de configuración de gráficas
  Chart.register(ArcElement,Tooltip, PieController, DoughnutController, Legend, LineController, CategoryScale, LinearScale, PointElement, LineElement, Filler); 
  // Agregamos los charts, 
  // el ArcElement para los dibujos,se tiene que importar si o si 
  // ToolTip es el el raton por encima grafica, 
  // PieController responsive, 
  // DoughnutController es el tipo grafica
