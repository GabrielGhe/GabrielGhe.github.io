---
---
var data = {};
var temp;
{% for post in site.posts %}
temp = {% include custom/post.json %};
data[temp.id] = temp;
{% endfor %}

// init lunr
var idx = lunr(function () {
  this.field('title', 10);
  this.field('tags');
  this.field('category');
  this.field('content');
})
// add each document to be index
for(var index in data) {
  idx.add(data[index]);
  delete data[index].content;
}

function search() {
  var result = idx.search($("#search input").val());
  var list = [];
  if(result && result.length > 0) {
    for(var i=0; i < result.length; ++i){
      list.push(data[result[i].ref]);
    }
  }
  searchList = list;
}

$(function() {
  $("#search input").keyup(function(e) {
    search();
  });
});