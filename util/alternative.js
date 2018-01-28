
function tag_words(input) {
  var query = "";
  Algorithmia.client("simflQNnfUnKf9qMHnRDWd75G6u1")
    .algo("nlp/AutoTag/1.0.1")
    .pipe(input)
    .then(function(output) {
      console.log(output.result);
      for(x = 0; x < output.result.length; x++){
        console.log(query)
        // console.log(output.result[x]);
        query += " " + output.result[x];
      }
      return query
    });
}

function google_search(q) {
  var query = tag_words(q);
  console.log("LAAAAAAAAAAAAAAAAAA" + query);
  var url = "https://www.googleapis.com/customsearch/v1?key=AIzaSyCct5M0BgsjZ_Fl-QQXNjWfXuhWkYS91zY&cx=009075568653349274157:erwoj2uzova&q="+query;
  $.getJSON(url, function(data) {
    console.log(data)
    for(x = 0; x < data['items'].length; x++){
      try{
        console.log(data['items'][x]['pagemap']['metatags'][0]['og:url']);
      }catch(error){
        console.log("nuh uh honey!!!");
      }
    }
    });
};

google_search("Ald. Burke under ethics board investigation for possible conflict of interest")
// tag_words("yo mama was so fat she fell over the boat")
