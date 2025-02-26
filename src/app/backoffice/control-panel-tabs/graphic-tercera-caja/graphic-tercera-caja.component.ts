import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartDataset, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


//primero tengo que poner tipos/interfaces sino @componente da error
interface ChartData {
  labels: string[];
  datasets: ChartDataset<'line'>[];
}

type DatasetInfo = {
  data: number[];
  borderColor: string;
  backgroundColor: string;
};
@Component({
  selector: 'app-graphic-tercera-caja',
  imports: [BaseChartDirective],
  templateUrl: './graphic-tercera-caja.component.html',
  styleUrl: './graphic-tercera-caja.component.scss'
})

export class GraphicTerceraCajaComponent implements OnInit {
  //propiedades public a las que puede acceder el html
  public lineChartOptions: ChartConfiguration['options'] = { 
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false, position: 'bottom' },
      tooltip: {},
      title: { display: true }
    },
    scales: {
      x: { title: { display: false, text: 'Meses' } },
      y: { display: false, beginAtZero: false, title: { display: true, text: 'Valores' } }
    }
  };

  public lineChartData: ChartData = { labels: [], datasets: [] };
  public lineChartType: ChartType = 'line';

  ngOnInit(): void {
    this.setChartData();
  }

  private createDatasets(): ChartDataset<'line'>[] { //le pasamos el primer valor de la interfaz chartData (se encarga de las caracteristicas de las lineas)
    const datasetInfo: DatasetInfo[] = [ //guardamos todas las propiedades no comunes de las líneas en un array de objetos 
      { data: [20, 30, 10, 50], borderColor: 'blue', backgroundColor: 'rgba(0,0,255,0.1)' },
      { data: [30, 3, 10, 5], borderColor: 'red', backgroundColor: 'rgba(255,0,0,0.1)' },
      { data: [40, 20, 5, 15], borderColor: 'yellow', backgroundColor: 'rgba(50, 50, 0, 0.1)' }
    ];

    return datasetInfo.map(info => ({ //map recorre el array y crea uno nuevo en el formatoque necesita Chart.js
                                      //cada objeto info del datasetInfo se transforma en un nuevo objeto con mas propiedades
                                      //devuelve 3 objetos (3 lineas)
      data: info.data,
      borderColor: info.borderColor,
      backgroundColor: info.backgroundColor,
      pointBackgroundColor: info.borderColor,
      pointBorderColor: 'white',
      fill: true,
      tension: 0.5
    }));
  }

  private generateLabels(): string[] { 
    return Array.from(new Set(["Enero", "Febrero", "Marzo", "Abril"])); //utilizamos set para eliminar valores duplicados y con from lo transformamos en un array
  }

  private setChartData(): void { 
    this.lineChartData = {
      labels: this.generateLabels(),
      datasets: this.createDatasets()
    };
  }
}
