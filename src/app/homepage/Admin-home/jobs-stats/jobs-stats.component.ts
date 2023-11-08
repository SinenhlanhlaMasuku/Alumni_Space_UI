
//new code 2
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-jobs-stats',
  templateUrl: './jobs-stats.component.html',
  styleUrls: ['./jobs-stats.component.css']
})
export class JobsStatsComponent {
  myForm: FormGroup;
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
  chart!: Chart;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      adminInput: [0, [Validators.required, Validators.min(0), Validators.max(12), Validators.pattern("^[0-9]*$")]],
    });
    this.myForm.get('adminInput')?.valueChanges.subscribe(value => {
      this.renderChart();
    });

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
        text: `Last ${this.myForm.value.adminInput} Month(s): Job stats: ${this.currentYear}`
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
          data: this.getDataForLastMonths(this.myForm.value.adminInput),
        },
      ],
      credits: {
        enabled: false,
      }
    });
  }

  // Rest of the code
  ReqMonths: number = 0;
    isEditchart: boolean = false;
  changeChartIndex() {
    this.renderChart();
  }
  getDataForLastMonths(reqMonths: number) {
        const lastMonthsData = [];
        for (let i = 12 - reqMonths; i < 12; i++) {
          lastMonthsData.push({
            name: this.months[i] + ' ' + this.currentYear,
            color: this.backgroundColor[i],
            y: this.data[i],
            // [i],
          });
        }
        return lastMonthsData;
      }
      enterNoMonthsToshow() {
            this.isEditchart = true;
          }
        
}


