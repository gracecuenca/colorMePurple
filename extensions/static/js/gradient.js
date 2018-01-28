//third graph: x-y coordinate with gradient
//each news source will be a dot
//size of dot is dependent on the number of times you visit the site
//x-axis measures political lean
//y-axis measures accuracy
//label of dots will be news sources
//hardcoded for now
//will retrieve from data base

var client = new Diffbot("9ee5de7ae41d96b92648547051b77e0c");
var current_url = "";

var retrieveArticleInfo = function(){
  client.article.get({
            url: current_url
        }, function onSuccess(response) {
            // output the title
            var element = document.getElementById("content");
            element.innerHTML = response["objects"][0]["title"];
        }, function onError(response) {
              switch(response.errorCode) {
                case 401:
                    alert(response.error)
                    break;
                case 404:
                    alert(response.error)
                    break;
                case 500:
                    alert(response.error)
                    break;
              }
        });
};


var gradient = new Chart(document.getElementById("gradient"), {
  type: 'bubble',
  data: {
    datasets: [
      {
        label: ['Your Article'], //pull actual article name
        backgroundColor:"rgba(255,221,50,0.6)",
        borderColor: "rgba(255,221,50,1)",
        data: [{
          x: -2500,
          y: 50,
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
