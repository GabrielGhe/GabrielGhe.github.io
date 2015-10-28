---
layout: post
title: "Sequences and Generators"
description: "In swift, when we want to iterate over a sequence, we use a generator. It's not the same as a generator in python or in javascript. This post is all about how to create and use them. More information about them can be found [here](http://austinzheng.com/2015/01/24/swift-seq/?utm_source=Swift+Weekly&utm_campaign=63f62d065e-Swift_Weekly_8&utm_medium=email&utm_term=0_3c61623c17-63f62d065e-181458449)."
category: swift
tags: [ios, swift, generators, sequences]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

In swift, when we want to iterate over a sequence, we use a generator. It's not the same as a generator in python or in javascript. This post is all about how to create and use them. More information about them can be found [here](http://austinzheng.com/2015/01/24/swift-seq/?utm_source=Swift+Weekly&utm_campaign=63f62d065e-Swift_Weekly_8&utm_medium=email&utm_term=0_3c61623c17-63f62d065e-181458449).

<!-- Content -->
<h3>Content</h3>

In swift, like in all languages, we can iterate over a collection using a `for each` or better named `for in` in swift.

{% highlight swift linenos %}
// array
for item in ["first", "second", "third"] {
    println(item)
}
// first
// second
// third


// dictionary
for (key, value) in ["key1":1, "key2":2, "key3":3] {
    println("key:\(key) value:\(value)")
}
// key:key1 value:1
// key:key2 value:2
// key:key3 value:3


// range
for i in 0..<3 {
    println(i)
}
// 0
// 1
// 2
{% endhighlight %}

This works for built in types but how can we use the `for..in` with our own classes? We have to add the `SequenceType` protocol to our class.

{% highlight swift linenos %}
// Initial attempt
extension Cats : SequenceType {
    func generate() -> Generator {
        
    }
}
{% endhighlight %}

We have to return a Generator. A Generator has to conform to the `GeneratorType` protocol which has only one method, `next()`.

{% highlight swift linenos %}
struct List<T> : GeneratorType {
  var currentNode : List<T>

  init(head: List<T>) {
    currentNode = head
  }

  mutating func next() -> T? {
    switch currentNode {
    case let cons as List<T>:
      currentNode = cons.next
      return cons.value
    default:
      return nil
    }
  }
}
{% endhighlight %}

