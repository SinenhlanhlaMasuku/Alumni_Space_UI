import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-alumni-stats',
  templateUrl: './alumni-stats.component.html',
  styleUrls: ['./alumni-stats.component.css']
})
export class AlumniStatsComponent {
  backgroundColor = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 205, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(176, 83, 25, 1)',
    'rgba(94, 190, 250, 1)',
    'rgba(225, 27, 80, 1)',
    'rgba(22, 1, 192, 1)',
    'rgba(159, 122, 234, 1)',
    'rgba(70, 200, 72, 1)',
    'rgba(252, 3, 7, 1)',
  ];

  data: { [key: string]: number[] } = {
    '2023': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Example data for the year 2023
    '2024': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // Example data for the year 2024
    // Add data for other years as needed
  };

  chart!: Chart;

  constructor() {
    this.renderChart();
  }

  renderChart() {
    const currentYear = new Date().getFullYear().toString();
    const validatedData = this.validateAlumniData(currentYear);
    this.chart = new Chart({
      chart: {
        type: 'column',
        height: 250,
        width: 350,
      },
      title: {
        text: 'Alumni stats'
      },
      xAxis: {
        categories: this.getMonths(currentYear),
        title: {
          text: 'Months of registration'
        }
      },
      yAxis: {
        title: {
          text: 'Number of Alumni registered'
        }
      },
      series: [
        {
          name: 'Alumni(s)',
          type: 'column',
          showInLegend: false,
          data: validatedData.map((value, index) => {
            return {
              color: this.backgroundColor[index % this.backgroundColor.length],
              y: value,
            };
          }),
        },
      ],
      credits: {
        enabled: false,
      }
    });
  }

  validateAlumniData(year: string): number[] {
    const currentYear = new Date().getFullYear().toString();
    const currentMonth = new Date().getMonth();
    const isCurrentYear = currentYear === year;
    const data = this.data[year] || [];

    if (isCurrentYear) {
      return data.slice(0, currentMonth + 1);
    } else {
      return data;
    }
  }

  getMonths(year: string): string[] {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months.map(month => month + ' ' + year);
    // + year
  }
}


