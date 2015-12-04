---
layout: post
title: "Move to another ViewController Programmatically"
description: "So you have a ViewController in your storyboard and you want to be able to display it from code but don't know how. The answer is the `presentViewController` function."
category: swift
tags: ["ios", "ui", "viewcontroller", "animation"]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

So you have a ViewController in your storyboard and you want to be able to display it from code but don't know how. The answer is the `presentViewController` function.

{% highlight swift linenos=table  %}
// we have to get the controller
// Make sure you add an Identified to your controller
// in the storyboard
var newController = self.storyboard?.instantiateViewControllerWithIdentifier("NewViewController") as NewViewController

// If you want to fade out or animate your current viewcontroller
// you have to use a CATransition
var transition = CATransition()
transition.duration = 1;
transition.type = kCATransitionFade;
transition.subtype = kCATransitionFromBottom;
self.view.window?.layer.addAnimation(transition, forKey: kCATransition)

// Now we display our new controller
// The animation is false because the default animation is bad
self.presentViewController(newController, animated: false, completion: nil)
{% endhighlight %}