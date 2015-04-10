---
layout: post
title: "Decorators"
description: ""
category: python
tags: [decorator]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

Decorators allow you to modify a function when it gets called. It's used for things like memoization that keeps track of return statements. You can find more information [here](http://simeonfranklin.com/blog/2012/jul/1/python-decorators-in-12-steps/).

{% highlight python linenos %}
def makebold(fn):
    return lambda: "<b>" + fn() + "</b>"

def makeitalic(fn):
    return lambda: "<i>" + fn() + "</i>"

@makebold
@makeitalic
def hello():
    return "hello world"

hello()
# "<b><i>hello world</i></b>"
# "<b>" + ("<i>" + fn() + "</i>") + "</b>"


print hello() ## returns <b><i>hello world</i></b>
{% endhighlight %}