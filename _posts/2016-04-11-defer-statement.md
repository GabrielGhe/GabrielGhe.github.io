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
func writeStatus() {
  let file = openFile()
  
  let networkStatusOptional = fetchNetworkStatus()
  if let networkStatus = networkStatusOptional {
    file.write(networkStatus)
  }

  closeFile(file)
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

This works fine, except if there's an exception. Another thing that's bad about this snippet is that the method could be very long (if you've read [Clean Code](https://www.amazon.ca/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882), you won't have this problem) and you have to place the closeFile call at the end.

Here is the Swift 2.0 approach:

<!-- Code _______________________________________-->
{% highlight swift linenos=table %}
func writeStatus() {
  let file = openFile()
  defer { closeFile(file) }
  
  let networkStatusOptional = fetchNetworkStatus()
  guard networkStatus != nil else { return }
  file.write(networkStatus)
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

The code is cleaner, easier to understand and there is no pyramid of doom. If you haven't already, you should read my post on the [guard statement]({% post_url 2016-04-04-guard-statement %}).



<!-- Order of operations -->
<h3>Order of operations</h3>

<!-- Code _______________________________________-->
{% highlight swift linenos=table %}
func firstCall() {
  print("1")
  secondCall()
  print("5")
}

func secondCall() {
  print("2")
  defer { print("3") }
  print("4")
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

The order of the print statements will be <b>1 2 4 3 5</b>. The defer statement is called right before the method exits even though it's not the last line in the method.