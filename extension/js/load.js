var sources = {
  "theonion.com" : "satire",
  "nytimes.com" : "",
  "bostonglobe.com" : "",
  "express.co.uk" : "rumor"
}

function myFunction(tablink) {
  var url = tablink;
  console.log(url);
  for (var key in sources){
    if (url.includes(key) && (key==="theonion.com" || key==="express.co.uk")){
        chrome.browserAction.setIcon({path:"warning.png"});
        document.getElementById("chart").innerHTML = key + " appears to be an unreliable source (" + sources[key] + "). Proceed with caution!";
        return;
    }
    else if (url.includes(key)){
      chrome.browserAction.setIcon({path:"icon.png"});
      console.log("match found");
      var element = document.createElement("canvas");
      element.setAttribute("id", "gradient");
      element.setAttribute("width", "200");
      element.setAttribute("height", "100");
      var chart = document.getElementById("chart");
      chart.innerHTML ="";
      chart.appendChild(element);
      var el = document.createElement("script");
        if (key==="nytimes.com"){
          el.setAttribute("src", "js/nytimes.js");
          var yourElement = document.getElementById('alternate');
          yourElement.setAttribute('href', 'http://www.thefiscaltimes.com/2018/01/25/Tax-Cuts-Will-Have-Limited-Impact-Economy-Moody-s-Says');
          yourElement.setAttribute('target','_blank');
        }
        if (key==="bostonglobe.com"){
          el.setAttribute("src","js/bostonglobe.js");
          var yourElement = document.getElementById('alternate');
          yourElement.setAttribute('href', 'https://www.wsj.com/articles/dozens-of-people-recount-pattern-of-sexual-misconduct-by-las-vegas-mogul-steve-wynn-1516985953');
          yourElement.setAttribute('target','_blank');
        }
      chart.appendChild(el);
      return;
    }
  }
  //code to catch
  chrome.browserAction.setIcon({path:"icon.png"});
  console.log(document.getElementById("chart"));
  document.getElementById("chart").innerHTML = "Not a news source, or not enough data to produce an accurate bias and reliability score."
};

var setFake = function(){
  console.log("new tab triggered");
  var tablink;
  var url;
  chrome.tabs.getSelected(null,function(tab){
    var url = myFunction(tab.url);
  })

  //chrome.extension.getBackgroundPage().window.location.href
};

chrome.tabs.onUpdated.addListener(setFake());
