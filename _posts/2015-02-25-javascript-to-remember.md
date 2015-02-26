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

