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
          x: -2500,
          y: 50,
          r: 50
        }]
      }, {
        label: ['The New Yorker'],
        backgroundColor: "rgba(60,186,159,0.6)",
        borderColor: "rgba(60,186,159,1)",
        data: [{
          x: -2000,
          y: 70,
          r: 30
        }]
      }, {
        label: ['Wall Street Journal'],
        backgroundColor: "rgba(193,46,12,0.6)",
        borderColor: "rgba(193,46,12,1)",
        data: [{
          x: 2000,
          y: -33,
          r: 10
        }]
      }
    ]
  },
  options: {
    legend: {
      labels: {
        fontColor: "black"
      }
    },
    scales: {
        yAxes: [{
          ticks: {
            display: false,
            fontColor: "black"
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
            fontColor: "black"
          },
          scaleLabel: {
            display: true,
            labelString: "Political Lean",
            fontColor: "black"
          }
        }]
      }
    }
});
