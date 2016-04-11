---
layout: post
title: "Defer statement"
description: "
This is an interesting addition to the Swift 2.0 language. It acts like a finally for your methods and can be placed anywhere. It is the statement you use when you want to clean up resources. You can learn more about it by reading [this nshisper post](http://nshipster.com/guard-and-defer/). 
"
category: swift
tags: [ios, apple, finally]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

{{ page.description }}

<!-- Content -->
<h3>Content</h3>

Here's the scenario. You want to open a file and write some text to it then close it. In Swift 1.0, you would do the following:

<!-- Code _______________________________________-->
{% highlight swift linenos=table %}

{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->