---
layout: post
title: "EcmaScript 6 feature: template strings"
description: ""
category: javascript
tags: [es6, string]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

Javascript's new version (EcmaScript 6) has some amazing new features. The one discussed in this post is template strings.
Template strings are similar to string interpolation in swift and python. It uses backticks instead of double or single quotes.
More information can be found [here](http://tc39wiki.calculist.org/es6/template-strings/).

<!-- Examples -->
<h3>Examples</h3>

{% highlight javascript linenos %}
var first = "Jake"
  , last = "Daisy";

var name1 = "My name is " + first + " " + last;
var name2 = `My name is ${first} ${second}`;
// "My name is Jake Daisy"

var test1 = `Hello`;
// '"Hello"'

var test2 = 5
  , test3 = 6;

`test2 + test3 = ${ test2 + test3 }`
// "test2 + test3 = 11"
{% endhighlight %}