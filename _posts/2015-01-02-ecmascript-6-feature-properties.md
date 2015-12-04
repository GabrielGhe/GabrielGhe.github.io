---
layout: post
title: "EcmaScript 6 feature: enhanced properties"
description: "Javascript's new version (EcmaScript 6) has some amazing new features. The one discussed in this post is enhanced properties.
More information can be found [here](http://www.2ality.com/2014/12/es6-oop.html)."
category: javascript
tags: [es6, property, deconstruct]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

Javascript's new version (EcmaScript 6) has some amazing new features. The one discussed in this post is enhanced properties.
More information can be found [here](http://www.2ality.com/2014/12/es6-oop.html).

<!-- Examples -->
<h3>Examples</h3>

<!-- Shorthands -->
Property shorthands

{% highlight javascript linenos=table  %}
let name = "Jim";
let age = 21;
let person = { name, age }; // { name: "Jim", age: 21 }
{% endhighlight %}

<!-- Deconstructing -->
Deconstructing

{% highlight javascript linenos=table  %}
let person = { name: "Jim", age: 21 };
let { name, age } = person;
console.log(name);  // Jim
console.log(age);   // 21
{% endhighlight %}

<!-- Computed keys -->
Computed Property Keys

{% highlight javascript linenos=table  %}
// Before
var key = "myKey";
var obj = {};
obj[key] = 5;

// Now
let key = "myKey";
let keyNum = 1;
let obj = {
  [key] = 5;        // computed property name
  [key + keyNum](){ // computed method name
    return true;
  }
};
console.log( obj["myKey"] );    // 5
console.log( obj["myKey1"]() ); // true
{% endhighlight %}