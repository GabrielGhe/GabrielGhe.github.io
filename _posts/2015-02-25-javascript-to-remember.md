---
layout: post
title: "JavaScript to Remember"
description: ""
category: javascript
tags: [callbacks, promises, context]
---
{% include JB/setup %}

<h3><a name="table-of-content"></a>Overview</h3>

### Table of content ###
1.  [String](#string)
2.  [Callbacks](#callbacks)
3.  [Promises](#promises)
4.  [Context](#context)
5.  [Sorting](#sorting)
6.  [Bit Manipulation](#bit)
7.  [Math](#math)
8.  [Latest Version](#latest)

<!-- 
#########################################
#
#   String
#
#########################################
-->
<br /><br /><br />
<h3><a name="string"></a><a href="">1. String</a></h3>
<!-- Code _______________________________________-->
{% highlight javascript linenos %}
"A string  "
.toLowerCase()        // "a string  "
.toUpperCase()        // "A STRING  "

//takes a delimiter
.split("")            // ['A', ' ', 's', 't', 'r', 'i', 'n', 'g', ' ', ' ']

//with split ^
.join()               // "A string  "

//takes startPos endPos
.substring(2, 4)      // "st"

.indexOf("str")       // 2

.trim()               // "A string"

.replace("string", "blah"); // "A blah  "

.match(/a str.*/i)    // "A string  "

//takes in a position
.charAt(0)            // "A"
.charCodeAt(0)        // 65

//takes in base
4.toString(2)         // 110
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

<!-- 
#########################################
#
# Callbacks
#
#########################################
-->
<br /><br /><br />
<h3><a name="callbacks"></a><a href="">2. Callbacks</a></h3>

Callbacks are a big part of javascript.

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
function callFuncOnFive(cb){
  return cb(5);
}

var returnedValue = callFuncOnFive(function(num){
  return num * num;
});

console.log(returnedValue); // 25 (5*5)
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


<!-- 
#########################################
#
#   Promises
#
#########################################
-->
<br /><br /><br />
<h3><a name="promises"></a><a href="">3. Promises</a></h3>

Promises allow you to flatten a callback pyramid

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
//using callbacks
function one() {
  function two() {
    function three() {
      
    }
  }
}

//using promises
promiseOne()
  .then(promiseTwo)
  .then(promiseThree);
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->
