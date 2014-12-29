---
---
var docs = 
[ 
{% for post in site.posts %}
  {% include custom/post.json %},
{% endfor %}
];
// init lunr
var idx = lunr(function () {
  this.field('title', 10);
  this.field('tags');
  this.field('category');
  //this.field('content');
})
// add each document to be index
for(var index in docs) {
  idx.add(docs[index]);
}

function search() {
  var result = idx.search($("#search input").val());

  if(result && result.length > 0) {
    for(var i=0; i < result.length; ++i){
      console.log(result[i].ref);
    }
  }
}

$(function() {
  $("#search input").keyup(function(e) {
    search();
  });
});