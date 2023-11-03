import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';


@Component({
  selector: 'app-events-stats',
  templateUrl: './events-stats.component.html',
  styleUrls: ['./events-stats.component.css']
})
export class EventsStatsComponent {
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  chart = new Chart({
    chart: {
      type: 'line',
      height: 250,
      width: 350,
    },
    title: {
      text: 'Event stats'
    },
    xAxis: {
      categories: this.months
    },
    yAxis: {
      title: {
        text: 'Number of events'
      }
    },
    series: [
      {
        name: "Successful",
        type: "line",
        color: "#ffc107",
        data: [0, 0, 0, 0, 0, 0, 0, 26, 12, 8, 14, 10,],
      },
      {
        name: "Failed",
        type: "line",
        color: "#dc3545",
        data: [0, 0, 3, 0, 1, 0, 0, 6, 2, 8, 4, 10,],
      },
    ],
    credits: {
      enabled: false,
    }
  })
}
