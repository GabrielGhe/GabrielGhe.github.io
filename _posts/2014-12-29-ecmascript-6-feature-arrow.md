---
layout: post
title: "EcmaScript 6 feature: arrow"
description: ""
category: javascript
tags: [es6, function]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

Javascript's new version (EcmaScript 6) has some amazing new features. The one discussed in this post is the arrow symbol `=>`.
The arrow symbol is used to create shorter functions and to fix the scoped `this`. More information can be found [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

<!-- Details -->
<h3>Details</h3>

<!-- Shorter functions -->
The arrow symbol can help shorten functions.

{% highlight javascript linenos %}
var dogs = [
  "Jake",
  "Daisy",
  "Honey"
];

var length1 = dogs.map(function(s){ return s.length });
// [4, 5, 5]

var length2 = dogs.map( s => s.length );
// [4, 5, 5]
{% endhighlight %}

<!-- Scoped this -->
It can also help with the scoped `this` variable.

{% highlight javascript linenos %}
// Before 1
function Dog1(){
  var that = this; // We have to cache 'this'
  that.treats = 0;
  setInterval(function eatTreat(){
    that.treats++;
  }, 1000);
}

// Before 2
function Dog2(){
  this.treats = 0;
  setInterval(function eatTreat(){
    this.treats++;
  }.bind(this), 1000); // We have to bind 'this' to the function
}

// Now
function Dog3(){
  this.treats = 0;
  setInterval(() => { // 'this' refers to Dog3's 'this'
    this.treats++;
  }, 1000);
}
{% endhighlight %}

<!-- Examples -->
<h3>Examples</h3>

{% highlight javascript linenos %}
var biggestNum = (a, b) => (a > b)? a : b;
biggestNum(4, 5);   // 5
biggestNum(10, 2);  // 10


var myList = ["Nami", "Luffy", "Zoro"];
var findIdx = (lst, val) => {
  for(var i=0; i < lst.length; ++i){
    if (lst[i] == val) return i;
  }
  return -1;
}
findIdx(myList, "Luffy"); // 1
findIdx(myList, "Robin"); // -1
{% endhighlight %}