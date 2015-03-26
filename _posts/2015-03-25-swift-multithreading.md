---
layout: post
title: "Swift: Multithreading"
description: ""
category: swift
tags: [ios, thread, parallel, background, concurrency]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

Multithreading is a big part of Programming and you should know it well. You can find more information about multithreading [here](https://developer.apple.com/library/mac/documentation/General/Conceptual/ConcurrencyProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008091-CH1-SW1).

<!-- Content -->
<h3>Content</h3>

Multithreading in iOS is done with "queues". Functions and closures are placed in a queue and then pulled off the queue to execute on an associated thread.

There is a special queue called the `main queue`. All UI interections MUST happen on this queue only. You should put all non-UI activity that is time consuming a queue other than the `main queue` so that you have a responsive UI.

There are 2 ways to do multithreading.

<!-- Code _______________________________________-->
{% highlight swift linenos %}
let queue = NSOperationQueue()
queue.addOperationWithBlock {
    // do something in the background

    NSOperationQueue.mainQueue().addOperationWithBlock {
        // when done, update your UI and/or model on the main queue
    }
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


<!-- Code _______________________________________-->
{% highlight swift linenos %}
let priority = DISPATCH_QUEUE_PRIORITY_DEFAULT
dispatch_async(dispatch_get_global_queue(priority, 0)) {
    // do something in the background
    
    dispatch_async(dispatch_get_main_queue()) {
        // when done, update your UI and/or model on the main queue
    }
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->