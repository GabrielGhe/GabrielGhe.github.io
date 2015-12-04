---
layout: post
title: "EcmaScript 6 feature: The spread"
description: "The spread operator `[0, ...a, 5, 6]` where `a = [1, 2, 3, 4]` allows you to spread the contents of a to spread the contents of a to form the new array `[0, 1, 2, 3, 4, 5, 6]`. You can find out more about it [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator). This post will have several examples. Here's another [cool website](http://es6-features.org/#Constants) to see other EcmaScript 6 features.r"
category: javascript
tags: [es6, property, deconstruct]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

The spread operator `[0, ...a, 5, 6]` where `a = [1, 2, 3, 4]` allows you to spread the contents of a to spread the contents of a to form the new array `[0, 1, 2, 3, 4, 5, 6]`. You can find out more about it [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator). This post will have several examples. Here's another [cool website](http://es6-features.org/#Constants) to see other EcmaScript 6 features.

<!-- Examples -->
<h3>Examples</h3>

<!-- Code _______________________________________-->
{% highlight javascript linenos=table  %}
function aFunction(x, y, z) {
    console.log(`${x} ${y} ${z}`); // "0 1 2"
}

var myList = [0, 1, 2];
aFunction(...args);
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


<!-- Code _______________________________________-->
{% highlight javascript linenos=table  %}
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1.push(...arr2); // [0, 1, 2, 3, 4, 5]
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


