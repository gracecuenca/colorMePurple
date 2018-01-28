//third graph: x-y coordinate with gradient
//each news source will be a dot
//size of dot is dependent on the number of times you visit the site
//x-axis measures political lean
//y-axis measures accuracy
//label of dots will be news sources
//hardcoded for now
//will retrieve from data base
var ctx = document.getElementById("bubbleChart").getContext("2d");

/*** Gradient ***/
//blue: 18, 13, 226
//red: 235, 29, 44
var gradient = ctx.createLinearGradient(0,0,1600,0);
gradient.addColorStop(0, 'rgba(18,13,226,1)');
gradient.addColorStop(1, 'rgba(235,29,44,0)');
/******* *********/

var bubbleChart = new Chart(document.getElementById("bubbleChart"), {
  type: 'bubble',
  data: {
    datasets: [
      {
        label: ['New York Times'],
        backgroundColor:"rgba(255,221,50,0.6)",
        borderColor: "rgba(255,221,50,1)",
        data: [{
          x: -0.75,
          y: 0.8,
          r: 22
        }]
      }, {
        label: ['The New Yorker'],
        backgroundColor: "rgba(60,186,159,0.6)",
        borderColor: "rgba(60,186,159,1)",
        data: [{
          x: -0.65,
          y: 0.72,
          r: 10
        }]
      }, {
        label: ['Fox News'],
        backgroundColor: "rgba(70,200,12,0.6)",
        borderColor: "rgba(70,200,12,1)",
        data: [{
          x: 0.88,
          y: -0.02,
          r: 5
        }]
      },
      {
        label: ['Wall Street Journal'],
        backgroundColor: "rgba(100,46,12,0.6)",
        borderColor: "rgba(100,46,12,1)",
        data: [{
          x: 0.1,
          y: 0.3,
          r: 12
        }]
      }
    ]
  },
  options: {
    legend: {
      position: 'bottom',
      labels: {
        fontColor: "black"
      }
    },
    scales: {
        yAxes: [{
          ticks: {
            display: false,
            fontColor: "black",
            min: -1.0,
            max: 1.0
          },
          scaleLabel: {
            display: true,
            labelString: "Reliability",
            fontColor: "black"
          }
        }],
        xAxes : [{
          ticks: {
            display: false,
            fontColor: "black",
            min: -1.0,
            max: 1.0
          },
          scaleLabel: {
            display: false,
            labelString: "Political Lean",
            fontColor: "black"
          }
        }]
      }
    },
});
