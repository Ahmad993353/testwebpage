// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("myLineChart");

// Define a function to fetch the data and update the chart
function fetchDataAndUpdateChart() {
  fetch('/data')
    .then(response => response.json())
    .then(data => {
      const behaviours = [];
      const score = [];
      const time = [];

      data["driving-history"].forEach(item => {
        behaviours.push(item.behavior);
        score.push(item.score);
        time.push(item.time);
      });

      var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: time,
          datasets: [{
            label: "Score",
            lineTension: 0.3,
            backgroundColor: "rgba(2,117,216,0.2)",
            borderColor: "rgba(2,117,216,1)",
            pointRadius: 5,
            pointBackgroundColor: "rgba(2,117,216,1)",
            pointBorderColor: "rgba(255,255,255,0.8)",
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(2,117,216,1)",
            pointHitRadius: 50,
            pointBorderWidth: 2,
            data: score,
          }],
        },
        options: {
          scales: {
            xAxes: [{
              time: {
                unit: 'time'
              },
              gridLines: {
                display: false
              },
              ticks: {
                maxTicksLimit: 7
              }
            }],
            yAxes: [{
              ticks: {
                min: 0,
                max: 100,
                maxTicksLimit: 7
              },
              gridLines: {
                color: "rgba(0, 0, 0, .125)",
              }
            }],
          },
          legend: {
            display: false
          }
        }
      });
    });
}

// Call the function to fetch and update the chart initially
fetchDataAndUpdateChart();

// Set up the auto-refresh feature
setInterval(fetchDataAndUpdateChart, 15000); // Refresh every 15 seconds
