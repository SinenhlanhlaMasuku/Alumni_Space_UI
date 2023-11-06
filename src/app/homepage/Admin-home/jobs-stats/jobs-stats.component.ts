// import { Component } from '@angular/core';
// import { Chart } from 'angular-highcharts';

// @Component({
//   selector: 'app-jobs-stats',
//   templateUrl: './jobs-stats.component.html',
//   styleUrls: ['./jobs-stats.component.css']
// })
// export class JobsStatsComponent {
//   months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//   backgroundColor = [
//     'rgba(255, 99, 132, 1)',
//     'rgba(54, 162, 235, 1)',
//     'rgba(255, 205, 86, 1)',
//     'rgba(75, 192, 192, 1)',
//     'rgba(153, 102, 255, 1)',//5
//     'rgba(176, 83, 25, 1)',
//     'rgba(94, 190, 250, 1)',
//     'rgba(225, 27, 80, 1)',
//     'rgba(22, 1, 192, 1)',
//     'rgba(159, 122, 234. 1)',//10
//     'rgba(70, 200, 72, 1)',
//     'rgba(252, 3, 7, 1)',//12



//   ];
//   data = [12, 19, 3, 5, 2, 14, 20, 23, 47, 5, 12, 25];

//   chart = new Chart({
//     chart: {
//       type: 'pie',
//       height: 250,
//       width: 250
//     },
//     title: {
//       text: 'Last 5 Month: Job stats'
//     },
//     plotOptions:{
//       pie:{
//         innerSize: '40%'
//       }
//     },
//     xAxis: {
//       categories:[
//         this.months[7],
//         this.months[8],
//         this.months[9],
//         this.months[10],
//         this.months[11],
//       ]
//     },
//     yAxis: {
//        title: {
//         text: 'Jobs in %'
//       }
//     },
//     series: [
//       {
//         name: "job(s)",
//         type: "pie",
//         data: [
//           {
//             name: this.months[7],
//             color: this.backgroundColor[7],
//             y: this.data[7]
//           },
//           {
//             name: this.months[8],
//             color: this.backgroundColor[8],
//             y: this.data[8],
//           },
//           {
//             name: this.months[9],
//             color: this.backgroundColor[9],
//             y: this.data[9]
//           },
//           {
//             name: this.months[10],
//             color: this.backgroundColor[10],
//             y: this.data[10]
//           },
//           {
//             name: this.months[11],
//             color: this.backgroundColor[11],
//             y: this.data[11]
//           },
//         ],
//       },
//     ],
//     credits: {
//       enabled: false,
//     }
//   })
// }
import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-jobs-stats',
  templateUrl: './jobs-stats.component.html',
  styleUrls: ['./jobs-stats.component.css']
})
export class JobsStatsComponent {
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
   currentYear = new Date().getFullYear().toString();

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
  data = [12, 19, 3, 5, 2, 14, 20, 23, 47, 5, 12, 25];
  // data: { [key: string]: number[] } = {
  //   '2023': [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Example data for the year 2023
  //   '2024': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // Example data for the year 2024
    // Add data for other years as needed
  // };

  chart!: Chart;

  constructor() {
    this.renderChart();
  }

  renderChart() {
    this.chart = new Chart({
      chart: {
        type: 'pie',
        height: 250,
        width: 250
      },
      title: {
        text: 'Last 5 Month: Job stats: ' + this.currentYear
      },
      plotOptions: {
        pie: {
          innerSize: '40%'
        }
      },
      series: [
        {
          name: 'job(s)',
          type: 'pie',
          data: this.getDataForLastFiveMonths(),
         
        },
      ],
      credits: {
        enabled: false,
      }
    });
  }

  getDataForLastFiveMonths() {
    const lastFiveMonthsData = [];
    for (let i = 7; i < 12; i++) {
      lastFiveMonthsData.push({
        name: this.months[i],
        color: this.backgroundColor[i],
        y: this.data[i]
      });
    }
    return lastFiveMonthsData;
  }
  
  // validateEvents(year: string): number[] {
  //   const currentYear = new Date().getFullYear().toString();
  //   const currentMonth = new Date().getMonth();
  //   const isCurrentYear = currentYear === year;
  //   const data = this.data[year] || [];

  //   if (isCurrentYear) {
  //     return data.slice(0, currentMonth + 1);
  //   } else {
  //     return data;
  //   }
  // }

  // getDataForLastFiveMonths(year: string) {
  //   const lastFiveMonthsData = [];
  //   const currentYear = new Date().getFullYear().toString();
  //   const startMonth = currentYear === year ? new Date().getMonth() - 4 : 7;
  
  //   for (let i = startMonth; i < 12; i++) {
  //     lastFiveMonthsData.push({
  //       name: this.months[i],
  //       color: this.backgroundColor[i],
  //       y: this.data[year][i]
  //     });
  //   }
  
  //   return lastFiveMonthsData;
  // }


  getMonths(year: string): string[] {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months.map(month => month + ' ' + year);
  }

}
