while (1==1) {

  $(function(){

    // Bind the event.
    $(window).hashchange( function(){
      // Alerts every time the hash changes!
      alert( location.hash );
    })

    // Trigger the event (useful on page load).
    $(window).hashchange();
    console.log(window.location.href)

  });

}
