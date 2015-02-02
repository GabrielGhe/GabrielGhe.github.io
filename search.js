---
---
/** @jsx React.DOM */
var data = {};
var temp;
{% for post in site.posts %}
temp = {% include custom/post.json %};
data[temp.id] = temp;
{% endfor %}

// init lunr
var idx = lunr(function () {
  this.field('title', 10);
  this.field('category', 8);
  this.field('tags', 5);
  this.field('date', 4);  
  this.field('content');
})
// add each document to be index
for(var index in data) {
  idx.add(data[index]);
  delete data[index].content;
  delete data[index].date;
}

$(function() {
  React.renderComponent(<SearchBar lunr={idx} posts={data} />,document.getElementById('searchbar'));
});