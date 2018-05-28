//var test = fetch('README.md');
// Synchronous highlighting with highlight.js
marked.setOptions({
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  }
});

var toc_config = {
    selector:   'h1, h2, h3, h4, h5, h6',
    scope:      '#content',
    overwrite:  false,
    prefix:     'toc'
}

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}
var content = findGetParameter("content");
console.log("expected content= ".concat(content));
var mdRequest = new Request('content/'.concat(content).concat(".md"));
fetch(mdRequest)
.then(function(response) {
    if(response.ok){
      if(response.status == 200){
        return response.blob();
      }
    }
})
.then(function(blob) {
    //if(blob.type == 'text/markdown'){
      var reader = new FileReader();
      reader.onload = function() {
        document.getElementById('content').innerHTML = marked(reader.result);
        document.querySelector('#toc').appendChild(initTOC(toc_config));
      }
      reader.readAsText(blob);
    //}
})
.catch(function(error) {
    console.error(error);
});
