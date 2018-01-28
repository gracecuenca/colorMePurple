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
