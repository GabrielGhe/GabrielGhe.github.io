---
layout: post
title: "EcmaScript 6 feature: generators and iterators"
description: "Javascript's new version (EcmaScript 6) has some amazing new features. The ones discussed in this post is iterators and generators.
More information can be found [here](http://www.2ality.com/2013/06/iterators-generators.html)."
category: javascript
tags: [es6, iterator, generator, loop]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

Javascript's new version (EcmaScript 6) has some amazing new features. The ones discussed in this post is iterators and generators.
More information can be found [here](http://www.2ality.com/2013/06/iterators-generators.html).

<!-- Details -->
<h3>Details</h3>

<br />
<!-- Iterator -->
<h4>Iterator</h4>

Iterators allow you to go through every element inside an abstract data type the same way without having to know how it's been implemented. Java has the Iterable interface which forces you to implement the `next()` and `hasNext()` methods. ES6 has only 1
method, `next()` that has 2 return values.

{% highlight javascript linenos=table  %}
// Not at the end
return { done:false, value:"returnValue" };

// After last element
return { done:true, value:"optionalEndValue" };
{% endhighlight %}

To iterate over an object, you need the `next()` method and you need your object to be iterable. To make your object iterable you do the following.

{% highlight javascript linenos=table  %}
class MyObject {
  ...
  [Symbol.iterator](){
    ...
    // this iterator has the next function mentioned above
    return aIteratorYouCreated;
  }
}
{% endhighlight %}

Now that you have the iterator, you want to iterate over its elements. To do this, we use es6's new `for ... of` loop.

{% highlight javascript linenos=table  %}
for (let value of iterable) {
  console.log(value);
}

// for arrays, we can use entries which have both index and value
for (let [index, value] of someArray.entries() ) {
  console.log(`${index} - ${value}`);
}
{% endhighlight %}

<br />
<!-- Generators -->
<h4>Generators</h4>

Generators are functions that allow you to pause and resume. They use the `yield` key instead of the `return` key.
When the generator is called the first time, it runs until it hits the first `yield` and then stops. When called again, it will run until the next `yield`. It will continue this way until it finishes. Generators in python work the same way. That's because ES6 got them from Python.

{% highlight javascript linenos=table  %}
function* generatorFib(){
  prev = 0;
  curr = 1;
  
  yield 0;
  yield 1;

  while (true) {
    temp = curr;
    curr += prev;
    prev = curr;
    yield curr;

    if (curr == 2) {
      break;
    }
  }
}

// first 5 fib numbers
let fibs = generatorFib();
fibs.next(); // { done:false, value: 0}
fibs.next(); // { done:false, value: 1}
fibs.next(); // { done:false, value: 1}
fibs.next(); // { done:false, value: 2}
fibs.next(); // { done:true }
{% endhighlight %}

We can also iterate through a generator

{% highlight javascript linenos=table  %}
for (let fib of fibs) {
  console.log(fib);
}
// 0
// 1
// 1
// 2
{% endhighlight %}