import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

export default function NbosOpportunityChart({ opportunitySummary }) {
  const chartTitle = 'Current vs. Same time last year';
  const options = {
    chart: {
      type: 'column',
      marginLeft: 150,
      marginRight: 150,
    },
    title: {
      text: chartTitle,
    },
    subtitle: {
      text: '',
    },
    xAxis: {
      categories: [
        'Stage One',
        'Stage Two',
        'Stage Three',
        'Stage Four',
        'Booked YTD',
      ],
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Revenue',
      },
    },
    tooltip: {},
    plotOptions: {
      column: {
        pointPadding: 0,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: '2021',
        color: '#0166CC',
        data: [
          parseFloat(opportunitySummary.stageOne2021),
          parseFloat(opportunitySummary.stageTwo2021),
          parseFloat(opportunitySummary.stageThree2021),
          parseFloat(opportunitySummary.stageFour2021),
          parseFloat(opportunitySummary.booked2021),
        ],
      },
      {
        name: '2020',
        color: '#9AC1EB',
        data: [
          parseFloat(opportunitySummary.stageOne2020),
          parseFloat(opportunitySummary.stageTwo2020),
          parseFloat(opportunitySummary.stageThree2020),
          parseFloat(opportunitySummary.stageFour2020),
          parseFloat(opportunitySummary.booked2020),
        ],
      },
    ],
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
