//first graph: number of liberal/conservative articles viewed over time
//hardcoded for testing for now

// x-axis label
//the start and end will be retrieved from the database
//hardcoded for now
//dates in the form yyyy-mm-dd
var start = "2018-01-20";
var end = "2018-01-26";
var dates = ["01/20", "01/21", "01/22", "01/23", "01/24", "01/25", "01/26"]
// For drawing the lines
var liberal = [86,114,106,106,107,111,133];
var conservative = [6,3,2,2,7,26,82];

var lineChart = new Chart(document.getElementById("lineChart"), {
  type: 'line',
  data: {
    labels: dates,
    datasets: [
      {
        data: liberal,
        label: "Liberal",
        borderColor: "#3e95cd",
        fill: false
      },
      {
        data: conservative,
        label: "Conservative",
        borderColor: "#c45850",
        fill: false
      }
    ]
  }
});

//second graph: doughnut view of conservative and liberal articles viewed
var doughnutChart = new Chart(document.getElementById("doughnutChart"), {
  type: 'doughnut',
  data: {
    labels: ["Liberal", "Conservative"],
    datasets: [
      {
        label: "Number Articles",
        backgroundColor: ["#3e95cd","#c45850"],
        data: [10000, 2000]
      }
    ]
  },
  options: {
      title: {
        display: true,
        text: 'Number of Liberal and Conservative Articles Read'
      }
    }
});

//third graph: x-y coordinate with gradient
//each news source will be a dot
//size of dot is dependent on the number of times you visit the site
//x-axis measures political lean
//y-axis measures accuracy
//label of dots will be news sources
//hardcoded for now
//will retrieve from data base

var bubbleChart = new Chart(document.getElementById("bubbleChart"), {
  type: 'bubble',
  data: {
    datasets: [
      {
        label: ['New York Times'],
        backgroundColor: "rgba(255,221,50,0.2)",
        borderColor: "rgba(255,221,50,1)",
        data: [{
          x: -2500,
          y: 50,
          r: 50
        }]
      }, {
        label: ['The New Yorker'],
        backgroundColor: "rgba(60,186,159,0.2)",
        borderColor: "rgba(60,186,159,1)",
        data: [{
          x: -2000,
          y: 70,
          r: 30
        }]
      }, {
        label: ['Wall Street Journal'],
        backgroundColor: "rgba(193,46,12,0.2)",
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
      title: {
        display: true,
        text: 'Gradient of News Sources Viewed and Frequency'
      }, scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: "Accuracy"
          }
        }],
        xAxes : [{
          scaleLabel: {
            display: true,
            labelString: "Political Lean"
          }
        }]
      }
    }
});
