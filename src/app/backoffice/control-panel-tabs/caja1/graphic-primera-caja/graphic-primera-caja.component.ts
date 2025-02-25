import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartDataset, ChartType, Tooltip, } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-graphic-primera-caja',
  imports: [BaseChartDirective],
  templateUrl: './graphic-primera-caja.component.html',
  styleUrl: './graphic-primera-caja.component.scss'
})
export class GraphicPrimeraCajaComponent implements OnInit {

  ngOnInit(): void {
    this.setChartData();
      
  }
  public doughnutChartOptions: ChartConfiguration ['options'] = {
    responsive: true,
    maintainAspectRatio: false, //Proporción del gráfico
    plugins: {
      legend: {
        display: false,//true para que aparzca la leyenda
        position: 'bottom'
      },
      tooltip: {},
      title: {
          text: 'Primer Gráfico',
          display: true
        }
      }
    }
    public doughnutChartLabels: string[] = [];
    public doughnutChartData: {
      labels:string[],
      datasets: ChartDataset<'doughnut'>[],
    } = {
      labels:[],
      datasets:[{
        data:[],
        backgroundColor:[],
        hoverBackgroundColor:[]
      }]
    }
    public doughnutChartType: ChartType = 'doughnut';

    private setChartData():void {
      this.doughnutChartLabels = [
        "Label 2",
        "Label 3",
        "Label 4"
      ]
      this.doughnutChartData.labels = [
        "Label 2",
        "Label 3",
        "Label 4"
      ]
      this.doughnutChartData.datasets[0].data = [30, 40, 50]
      this.doughnutChartData.datasets[0].backgroundColor = ["blue", "green", "yellow"]
      }
  }



