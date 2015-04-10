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

A popular promise library for nodejs is [Q](https://github.com/kriskowal/q)

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
//it allows you to do many awesome things like
var Q = require("q");


//chain promises
promiseOne()
  .then(promiseTwo)
  .then(promiseThree)
  .then(function() {
    //normal anonymous function
  })
  .fail(function(error) {
    //can handle error
  })
  .done();
  
  
//Create promises from async methods
Q.ninvoke(obj, "asyncMethod", {
    param1: "parameter"
  })
  .then(function(resultFromAsyncMethod) {
    //do stuff
  });
  

//Use callbacks and promises together
function async(err, val){
  //this is a async callback
  var deferred = Q.defer();
  
  if (err) {
    deferred.reject(new Error(err));
  } else {
    deferred.resolve(val);
  }
  return deferred.promise;
}


//A value can be turned into a promise
Q({ x:5 })
 .then(function(val){
  //val == 5
 });
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

<!-- 
#########################################
#
#       Context
#
#########################################
-->
<br /><br /><br />
<h3><a name="context"></a><a href="">4. Context</a></h3>

<h4>Hoisting</h4>

Javascript hoists variable declarations

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
function blah() {
  var a = 1;
}

//is the same as

var a;
function sameBlah() {
  a = 1;
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

It also hoists up function declarations

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
function outerFunc() {
  //How did it work?? I called innerFunc before initialization it!
  innerFunc();

  function innerFunc() {
    console.log(5);
  }
}

//is not the same as
function outerFunc() {
  x(); //won't work

  var x = function() {
    console.log(5);
  }
  
  x(); //will work
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

<h4>Bind method</h4>

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
//instead of doing something like this
obj = {
...
  render: function () {
    var that = this; //have to do this every time...
    this.getAsyncData(function () {
      that.specialFunction();
      that.anotherSpecialFunction();
    });
  }
...
};


//We do
obj = {
...
  render: function () {
    this.getAsyncData(function () {
      this.specialFunction();
      this.anotherSpecialFunction();
    }.bind(this)); 
    //This bind means that when getAsyncData gets called
    //this === obj
  }
...
};
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


<!-- 
#########################################
#
#       SORTING
#
#########################################
-->
<br /><br /><br />
<h3><a name="sorting"></a><a href="">5. Sorting</a></h3>

Sorting in javascript is easy

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
var sorted = [4, 3, 5, 2, 1].sort(function(a, b) {
  return a-b;
});
console.log(sorted) // [1, 2, 3, 4, 5]


var reversed = [4, 3, 5, 2, 1].sort(function(a, b) {
  return b-a;
});
console.log(reversed) // [5, 4, 3, 2, 1]
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


<!-- 
#########################################
#
#       Bit Manipulation
#
#########################################
-->
<br /><br /><br />
<h3><a name="bit"></a><a href="">6. Bit Manipulation</a></h3>

Bit operators

<table>
  <!-- Header -->
  <tr>
    <td>Operation name</td>
    <td>Javascript symbol</td>
    <td>Example</td>
    <td>Result</td>
    <td>Explanation</td>
  </tr>
  <!-- Row 1 -->
  <tr>
    <td>AND</td>
    <td>&</td>
    <td>7 & 5</td>
    <td>5</td>
    <td>111 & 101 = 101</td>
  </tr>
  <!-- Row 2 -->
  <tr>
    <td>OR</td>
    <td>|</td>
    <td>8 | 3</td>
    <td>11</td>
    <td>1000 | 0011 = 1011</td>
  </tr>
  <!-- Row 3 -->
  <tr>
    <td>XOR</td>
    <td>^</td>
    <td>15 ^ 5</td>
    <td>10</td>
    <td>1111 ^ 0101 = 1010</td>
  </tr>
  <!-- Row 5 -->
  <tr>
    <td>Right Shift</td>
    <td>>></td>
    <td>7 >> 1</td>
    <td>3</td>
    <td>111 >> 1 = 011</td>
  </tr>
  <!-- Row 6 -->
  <tr>
    <td>Not</td>
    <td>~</td>
    <td>~0</td>
    <td>-1</td>
    <td>~000 = 111 which is 2's complement -1</td>
  </tr>
</table>


<!-- 
#########################################
#
#     Math
#
#########################################
-->
<br /><br /><br />
<h3><a name="math"></a><a href="">7. Math</a></h3>

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
var x = Math.random() // float [0, 1[
Math.floor((Math.random() * 100) + 1); // int [1, 100[
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


<!-- 
#########################################
#
#     Latest Version
#
#########################################
-->
<br /><br /><br />
<h3><a name="latest"></a><a href="">8. Latest Version</a></h3>

The latest javascript is ECMA6 check out [the features](https://github.com/lukehoban/es6features).