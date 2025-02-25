import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartDataset, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-graphic-pequeno1',
  imports: [BaseChartDirective],
  templateUrl: './graphic-pequeno1.component.html',
  styleUrl: './graphic-pequeno1.component.scss'
})
export class GraphicPequeno1Component  implements OnInit{
  ngOnInit(): void {
     this.setChartData()
       }
     
       public lineChartOptions: ChartConfiguration['options'] = {
         responsive: true,
         maintainAspectRatio: false,
         plugins: {
           legend: {
             display: true,//true para que aparzca la leyenda
             position: 'right',
             align:"center",
             
             labels:{
              boxWidth: 10,
              boxHeight:10,
              useBorderRadius: true,
              borderRadius: 3
              
             }
           },
           tooltip: {},
           title: {
               display: true
             }
           },
         scales: {
           x: {
            display:false,
           
           },
           y: {
            display:false,
            beginAtZero: false,
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
             fill: true,
             label:"Organic 44.46%"                  
           }
        ]
         }
         public lineChartType: ChartType = 'line';
         
         private setChartData(): void {
           this.lineChartLabels = ["Enero", "Febrero", "Marzo", "Abril"];
       
           this.lineChartData.labels = ["Enero", "Febrero", "Marzo", "Abril"];
           this.lineChartData.datasets[0].data = [20, 30, 10, 50];
          
  
           // Opcionalmente puedes definir colores para puntos o la línea aquí si lo deseas
          this.lineChartData.datasets[0].borderColor = 'blue';
          this.lineChartData.datasets[0].backgroundColor = 'rgba(0, 0, 255, 0.1)';
       
         }
}
