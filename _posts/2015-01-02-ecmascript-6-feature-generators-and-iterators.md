---
layout: post
title: "EcmaScript 6 feature: generators and iterators"
description: ""
category: javascript
tags: [es6]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

Javascript's new version (EcmaScript 6) has some amazing new features. The ones discussed in this post is iterators and generators.
More information can be found [here](http://www.2ality.com/2014/12/es6-oop.html).

<!-- Details -->
<h3>Details</h3>

Iterators allow you to go through every element inside an abstract data type the same way without having to know how it's been implemented. Java has the Iterable interface which forces you to implement the `next()` and `hasNext()` methods. ES6 has only 1
method, `next()` that has 2 return values.

{% highlight javascript linenos %}
// Not at the end
return { done:false, value:"returnValue" };

// After last element
return { done:true, value:"optionalEndValue" };
{% endhighlight %}

To iterate over an object, you need the `next()` method