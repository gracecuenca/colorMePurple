// #strips url into main domain
function strip(url){
    www_index = url.indexOf("www.");
    input = url;
    if(www_index != -1){
        input = url.slice(www_index + 4, input.length ); //#returns url w/o www.
    }https_index = input.indexOf("https://");
    if(https_index != -1){
        input = input.slice(https_index + 8, input.length); //#removes https:// or http://
    }http_index = input.indexOf("http://");
    if(http_index != -1){
        input = input.slice(http_index + 7, input.length)
    }slash_index = input.indexOf("/");
    if(slash_index != -1){
        input = input.slice(0, slash_index); // removes rest of /'s
    // print(input)
    }
    return input;
}
