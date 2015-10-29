---
---
/** @jsx React.DOM */

$(function() {
  var random_posts = [];
  var data = {
    {% for post in site.posts %}
      {% include custom/post.json %},
    {% endfor %}
  };
  
  // init lunr
  var idx = lunr(function () {
    this.field('title', 10);
    this.field('category', 8);
    this.field('tags', 5);
    this.field('date', 4);
    this.field('content');
  });
  
  // add each document to be index
  for(var index in data) {
    idx.add(data[index]);
    random_posts.push(index);
    delete data[index].content;
    delete data[index].date;
  }
  
  var shuffle = function(v){
      for(var j, x, i = v.length; i; j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
      return v;
  }
  
  random_posts = shuffle(random_posts).splice(0,5);
  random_posts = random_posts.map(function(key){
    return {
        id: data[key].id,
        title: data[key].title,
        category: data[key].category
    };
  });

  React.render(React.createElement(SearchBar, { lunr: idx, posts: data }), document.getElementById('searchbar'));
  React.render(React.createElement(RandomPostList, { posts: random_posts }), document.getElementById('random_posts'));
});
