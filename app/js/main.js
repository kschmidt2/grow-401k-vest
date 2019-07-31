// adds social class to get social chart
// let element = document.getElementsByClassName("chart-area");
// for(var i = 0; i < element.length; i++)
// {
//     element[i].className += " social";
// }

Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const myChart = Highcharts.chart('chart-container', {
        chart: {
            type: 'bar',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100
        }, 
        title: {
            text: null
        },
        data: {
            googleSpreadsheetKey: '1nVkygAHZlSMKTCzvsokjo6lykioxnYpNWUsSguPz-ME',
            googleSpreadsheetWorksheet: 2
        },
        legend: {
            enabled: false
        },
        xAxis: {
            labels: {
                style: {
                    whiteSpace: 'nowrap'
                }
            },
            tickLength: 5
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow'
            },
            tickAmount: 6
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shadow: false,
            padding: 10,
            formatter: function () {
                return this.y + "%";
            }
        },
        responsive: {
            rules: [{
              condition: {
                maxWidth: 500
              },
              chartOptions: {
                chart: {
                  spacingRight: 10
                },
                legend: {
                    align: 'left',
                    x: -18
                },
                tooltip: {
                    enabled: false
                }
              }
            }]
        }
    });
});