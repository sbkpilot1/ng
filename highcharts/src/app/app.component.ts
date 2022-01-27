import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'highcharts';

  xyData = this.getXYData();
  items = Array.from(this.xyData.values());

  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Closed Conversations'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      angle: 45,
      categories: Array.from(this.xyData.keys())
    },
    series: [
      {
        name: 'Number Closed',
        type: 'line',
        data: this.items
      }
    ]
  });

  getXYData() {
    let rawData = [
    {
      closedDate: '2022-01-26 20:12 PST',
    },
    {
      closedDate: '2022-01-26 20:12 PST',
    },
    {
      closedDate: '2022-01-26 20:12 PST',
    },
    {
      closedDate: '2022-01-26 20:12 PST',
    },
    {
      closedDate: '2022-01-26 20:12 PST',
    },
    {
      closedDate: '2022-01-26 20:12 PST',
    },
    {
      closedDate: '2022-01-26 20:12 PST'
    },
    {
      closedDate: '2022-01-25 20:12 PST'
    },
    {
      closedDate: '2022-01-25 20:12 PST'
    },
    {
      closedDate: '2022-01-24 20:12 PST'
    },
    {
      closedDate: '2022-01-23 20:12 PST'
    },
    {
      closedDate: '2022-01-22 20:12 PST'
    }
    ];

    for (let i = 1; i < 30; i++) {
      rawData.push({
        closedDate: `2021-12-${i} 19:10`
      });

      if (i % 2 === 0) {
        for (let k = 1; k < 10; k++) {
          rawData.push({
            closedDate: `2021-12-${i} 19:10`
          });
        }
      }
    }

    rawData = rawData.slice(0, 30);

    const chartData = rawData.map(v => ({...v, closedDate: v.closedDate.split(' ')[0]}));
    const xyMap = new Map<string, number>();

    chartData.forEach(v => {
      if (!xyMap.has(v.closedDate)) {
        xyMap.set(v.closedDate, 1);
      } else {
        xyMap.set(v.closedDate, (xyMap.get(v.closedDate) || 0) + 1);
      }
    });

    return xyMap;
  }
}
