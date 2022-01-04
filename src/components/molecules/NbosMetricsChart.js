import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export const NbosMetricsChart = ({ chartData, chartType }) => {
  const chartTitle = '';
  const highChartOptions = {
    chart: {
      type: 'bar',
      // // spacingBottom: 15,
      // // spacingTop: 10,
      // // spacingLeft: 10,
      // // spacingRight: 10,
      marginLeft: 300,
      marginRight: 300,
      // width: null,
      // height: null,
      // borderRadius: 12,
    },
    title: {
      text: chartTitle,
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
        },
      },
    },
    legend: {
      align: 'left',
    },
    xAxis: {
      categories:
        chartType === 'behavior'
          ? ['Loan Production', 'Deposit Growth', 'TM Growth', 'New Clients']
          : [
              'Avg Overall RM Satisfaction',
              'Client Calls',
              'Prospect Calls',
              'Strategies Updated',
            ],
    },
    yAxis: {
      title: {
        text: null,
      },
      labels: {
        enabled: false,
      },
    },
    series: [],
  };

  useEffect(() => {
    const xAxis = {
      categories:
        chartType === 'outcome'
          ? ['Loan Production', 'Deposit Growth', 'TM Growth', 'New Clients']
          : [
              'Avg Overall RM Satisfaction',
              'Client Calls',
              'Prospect Calls',
              'Strategies Updated',
            ],
    };
    const series = [
      {
        name: 'RM',
        data:
          chartType === 'outcome'
            ? [
                parseFloat(chartData.loanProdY1),
                parseFloat(chartData.DepGrowthY1),
                parseFloat(chartData.TmGrowthY1),
                parseFloat(chartData.newClientsY1),
              ]
            : [
                parseFloat(chartData.avgOverallRMSatY1),
                parseFloat(chartData.clientCallsY1),
                parseFloat(chartData.prospectCallsY1),
                parseFloat(chartData.strategiesUploadedY1),
              ],
      },
      {
        name: 'This Time Last Year',
        data:
          chartType === 'outcome'
            ? [
                parseFloat(chartData.loanProdY2),
                parseFloat(chartData.DepGrowthY2),
                parseFloat(chartData.TmGrowthY2),
                parseFloat(chartData.newClientsY2),
              ]
            : [
                parseFloat(chartData.avgOverallRMSatY2),
                parseFloat(chartData.clientCallsY2),
                parseFloat(chartData.prospectCallsY2),
                parseFloat(chartData.strategiesUploadedY2),
              ],
      },
    ];
    const newMetricChartData = {
      ...highChartOptions,
      xAxis: xAxis,
      series: series,
    };
    setMetricChartData(newMetricChartData);
  }, [chartData]);

  const [metricChartData, setMetricChartData] = useState(highChartOptions);

  return <HighchartsReact highcharts={Highcharts} options={metricChartData} />;
};