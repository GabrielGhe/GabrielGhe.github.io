---
layout: post
title: "Swift: NSTimer"
description: ""
category: swift
tags: [ios, timer, setinterval]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

When you want to run something every x amount of time, you use an NSTimer. It is like the `setInterval` or `setTimeout` function from Javascript. You can find more information on NSTimers [here](https://developer.apple.com/library/mac/documentation/Cocoa/Reference/Foundation/Classes/NSTimer_Class/).

<!-- Content -->
<h3>Content</h3>

<!-- Code _______________________________________-->
{% highlight swift linenos %}
/*
class func scheduledTimerWithInterval(
    _ seconds: NSTimeInterval,
    target: AnyObject,
    selector: Selector(String),
    userInfo: AnyObject?,
    repeats: Bool
)
*/

let timer = NSTimer.scheduledTimerWithInterval(
    2.0,
    target: self,
    selector: "fire:", // the : means "call with an argument"
    userInfo: nil,
    repeats: true
)

func fire(timer: NSTimer) {
    if imDoneWithThisTimer {
        timer.invalidate()
    }
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

Every 2 seconds, the method `fire(NSTimer)` will be invoked in `self`