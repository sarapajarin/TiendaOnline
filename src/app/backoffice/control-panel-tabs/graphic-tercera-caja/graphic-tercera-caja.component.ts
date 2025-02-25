import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartDataset, ChartType, CategoryScale, LinearScale, Chart } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-graphic-tercera-caja',
  imports: [BaseChartDirective],
  templateUrl: './graphic-tercera-caja.component.html',
  styleUrl: './graphic-tercera-caja.component.scss'
})
export class GraphicTerceraCajaComponent implements OnInit{

  ngOnInit(): void {
    this.setChartData()
  }

  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,//true para que aparzca la leyenda
        position: 'bottom'
      },
      tooltip: {},
      title: {
          display: true
        }
      },
    scales: {
      x: {
        title: {
          display: false,
          text: 'Meses'
        }
      },
      y: {
        display:false,
        beginAtZero: false,
        title: {
          display: true,
          text: 'Valores'
        }
      }
    }
  };

  

    public lineChartLabels: string[] = [];

    public lineChartData: {
      labels: string[],
      datasets: ChartDataset<'line'>[],
    } = {
      labels: [],
      datasets: [{
        data: [],
        borderColor: 'blue',           
        backgroundColor: 'rgba(0,0,255,0.1)',  
        pointBackgroundColor: 'blue', 
        pointBorderColor: 'white',     
        fill: true,
        tension: 0.5                    
      },
    {
      data: [],
      borderColor: 'red',           
      backgroundColor: 'rgba(255,0,0,0.1)',  
      pointBackgroundColor: 'red', 
      pointBorderColor: 'white',     
      fill: true,
      tension: 0.5 
    },
    {
      data: [],
      borderColor: 'yellow',           
      backgroundColor: 'rgba(49, 50, 0, 0.1)',  
      pointBackgroundColor: 'yellow', 
      pointBorderColor: 'white',     
      fill: true,
      tension:0.5, 
      
    }]
    }
    public lineChartType: ChartType = 'line';
    
    private setChartData(): void {
      this.lineChartLabels = [];
  
      this.lineChartData.labels = ["Enero", "Febrero", "Marzo", "Abril"];
      this.lineChartData.datasets[0].data = [20, 30, 10, 50];
      this.lineChartData.datasets[1].data = [30, 3, 10, 5];
      this.lineChartData.datasets[2].data = [40, 20, 5, 15];
  
      // Opcionalmente puedes definir colores para puntos o la línea aquí si lo deseas
      this.lineChartData.datasets[0].borderColor = 'blue';
      this.lineChartData.datasets[0].backgroundColor = 'rgba(0, 0, 255, 0.1)';
      this.lineChartData.datasets[1].borderColor = 'red';
      this.lineChartData.datasets[1].backgroundColor = 'rgba(255, 0, 0, 0.1)';
      this.lineChartData.datasets[2].borderColor = 'yellow';
      this.lineChartData.datasets[2].backgroundColor = 'rgba(50, 50, 0, 0.1)';
    }
  }
  


