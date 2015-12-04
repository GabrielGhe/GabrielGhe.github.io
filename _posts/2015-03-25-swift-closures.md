---
layout: post
title: "Swift: Closures"
description: "Closures are awesome. You can do some powerful things with them, but they are dangerous sometimes. You can find more information about closures [here](https://developer.apple.com/library/ios/documentation/Swift/Conceptual/Swift_Programming_Language/Closures.html#//apple_ref/doc/uid/TP40014097-CH11-ID94)."
category: swift
tags: [ios, closure, anonymous]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

Closures are awesome. You can do some powerful things with them, but they are dangerous sometimes. You can find more information about closures [here](https://developer.apple.com/library/ios/documentation/Swift/Conceptual/Swift_Programming_Language/Closures.html#//apple_ref/doc/uid/TP40014097-CH11-ID94).

<!-- Content -->
<h3>Content</h3>

Here's an example where the closure will create a memory leak.

<!-- Code _______________________________________-->
{% highlight swift linenos=table  %}
class Person {
    var batmanSong = {} // () -> ()
    var sing(value: String) {
        println(value)
    }
    func learnSomething() {
        var na = "Na"
        var batman = " Batman"
        batmanSong = {
            na += "Na"
            self.sing(na + batman)
        }
    }
    func singBatmanSong8Times() {
        for i in 1...8 {
            sing()
        }
    }
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

The problem is that `self` has a reference to `batmanSong` and `batmanSong` has a reference to `self`. To fix this problem, you just say that `batmanSong` shouldn't keep a reference to `self`.

<!-- Code _______________________________________-->
{% highlight swift linenos=table  %}
batmanSong = { [unowned self] in
    na += "Na"
    self.sing(na + batman)
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->