---
layout: post
title: "Swift: Multithreading"
description: "Multithreading is a big part of Programming and you should know it well. You can find more information about multithreading [here](https://developer.apple.com/library/mac/documentation/General/Conceptual/ConcurrencyProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008091-CH1-SW1)."
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

There is a special queue called the `main queue`. All UI interections MUST happen on this queue only. You should put all non-UI activity that is time consuming on a queue other than the `main queue` so that you have a responsive UI (should also consider an ActivityIndicator/spinning wheel thingy).

There are 2 ways to do multithreading.

<!-- Code _______________________________________-->
{% highlight swift linenos %}
let queue = NSOperationQueue()
queue.addOperationWithBlock {
    // do something in the background

    let mainQ: NSOperationQueue = NSOperationQueue.mainQueue()
    mainQ.addOperationWithBlock {
        // when done, update your UI and/or model on the main queue
    }
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


<!-- Code _______________________________________-->
{% highlight swift linenos %}
let queue = dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0)
dispatch_async(queue) {
    // do something in the background

    let mainQ: dispatch_queue_t = dispatch_get_main_queue()
    dispatch_async(mainQ) {
        // when done, update your UI and/or model on the main queue
    }
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


When using the second option, you can use different priorities.

1. `QOS_CLASS_USER_INTERACTIVE`: quick and high priority
2. `QOS_CLASS_USER_INITIATED`: high priority, might take time
3. `QOS_CLASS_UTILITY`: long running
4. `QOS_CLASS_BACKGROUND`: user not concerned with this

<!-- Code _______________________________________-->
{% highlight swift linenos %}
let qos = Int(QOS_CLASS_USER_INTERACTIVE.value)
let queue = dispatch_get_global_queue(qos, 0)
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


<h4>Javascript's setTimeout</h4>

You can also do a `setTimeout` from javascript. As in, you can dispatch a function call after a certain interval. I really recommend creating a helped method for this one because it doesn't look very nice.

<!-- Code _______________________________________-->
{% highlight swift linenos %}
let delayInSeconds = 25.0
let delay = Int64(delayInSeconds * Double(NSEC_PER_MSEC))
let dispatchTime = dispatch_time(DISPATCH_TIME_NOW, delay)
dispatch_after(dispatchTime, dispatch_get_main_queue()) {
    // do something on the main queue 25 seconds from now
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


<h4>Synchronization</h4>

<!-- Code _______________________________________-->
{% highlight swift linenos %}
func synchronized(lock: AnyObject, closure: () -> ()) {
    objc_sync_enter(lock)
    closure()
    objc_sync_exit(lock)
}

synchronized(self) {
    println("This is a synchronized closure")
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->