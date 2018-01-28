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
        label: ['Your Article'], //pull actual article name
        backgroundColor:"rgba(255,221,50,0.6)",
        borderColor: "rgba(255,221,50,1)",
        data: [{
          x: -.5,
          y: .8,
          r: 10
        }]
      }
    ]
  },
  options: {
    legend: {
      display: false,
      labels: {
        fontColor: "black"
      }
    },
    scales: {
        yAxes: [{
          gridLines: {
            drawBorder: false,
            display: false
          },
          ticks: {
            display: false,
            fontColor: "black"
          },
          scaleLabel: {
            display: false,
            labelString: "Accuracy",
            fontColor: "black"
          }
        }],
        xAxes : [{
          gridLines: {
            drawBorder: false,
            display: false
          },
          ticks: {
            display: false,
            fontColor: "black"
          },
          scaleLabel: {
            display: false,
            labelString: "Political Lean",
            fontColor: "black"
          }
        }]
      }
    }
});
