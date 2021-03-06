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
var liberal = [5,7,9,8,7,5,6];
var conservative = [0,1,0,0,2,3,5];

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
  },
  options: {
    legend: {
      position: 'bottom',
      labels: {
        fontColor: "black"
      }
    }
  }
});
