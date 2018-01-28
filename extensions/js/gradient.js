//third graph: x-y coordinate with gradient
//each news source will be a dot
//size of dot is dependent on the number of times you visit the site
//x-axis measures political lean
//y-axis measures accuracy
//label of dots will be news sources
//hardcoded for now
//will retrieve from data base

var gradient = new Chart(document.getElementById("gradient"), {
  type: 'bubble',
  data: {
    datasets: [
      {
        label: ['Your Article'],
        backgroundColor:"rgba(255,221,50,1)",
        borderColor: "rgba(255,221,50,1)",
        data: [{
          x: -2500,
          y: 50,
          r: 2
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
            labelString: "Accuracy",
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
