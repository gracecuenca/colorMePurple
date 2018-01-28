//second graph: doughnut view of conservative and liberal articles viewed
var doughnutChart = new Chart(document.getElementById("doughnutChart"), {
  type: 'doughnut',
  data: {
    labels: ["Liberal", "Conservative"],
    datasets: [
      {
        label: "Number Articles",
        backgroundColor: ["#3e95cd","#c45850"],
        data: [36, 11]
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
    tooltips: {
			callbacks: {
				label: function(tooltipItem, data) {
					var allData = data.datasets[tooltipItem.datasetIndex].data;
					var tooltipLabel = data.labels[tooltipItem.index];
					var tooltipData = allData[tooltipItem.index];
					var total = 0;
					for (var i in allData) {
						total += allData[i];
					}
					var tooltipPercentage = Math.round((tooltipData / total) * 100);
					return tooltipLabel + ': ' + tooltipData + ' (' + tooltipPercentage + '%)';
				}
			}
    }
  }
});
