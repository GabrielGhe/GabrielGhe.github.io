---
layout: post
title: "UIView Transitions"
description: "In this post, I'll show you how to transition between 2 UIViews on tap in swift."
category: swift
tags: [ios, ui, transition]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

In this post, I'll show you how to transition between 2 UIViews on tap in swift.

{% highlight swift linenos=table  %}
// ### in viewDidLoad ###

let container = UIView()
let redSquare = UIView()
let blueSquare = UIView()

// set container frame and add to the screen
self.container.frame = CGRect(x: 60, y: 60, width: 200, height: 200)
self.view.addSubview(container)

// set red square frame up
// we want the blue square to have the same position as redSquare
// so lets just reuse blueSquare.frame
self.redSquare.frame = CGRect(x: 0, y: 0, width: 200, height: 200)
self.blueSquare.frame = redSquare.frame

// set background colors
self.redSquare.backgroundColor = UIColor.redColor()
self.blueSquare.backgroundColor = UIColor.blueColor()

// for now just add the redSquare
// we'll add blueSquare as part of the transition animation
self.container.addSubview(self.redSquare)
{% endhighlight %}

Ok, now we need to animate on click for it to look like this.

![Results]({{ ASSET_PATH }}/../images/2015-01-18-uiview-transitions.gif)

{% highlight swift linenos=table  %}
// ### in click event ###

// create a tuple to hold the views
var views = (frontView: self.redSquare, backView: self.blueSquare)
if self.redSquare.superview ==  nil {
  views = (frontView: self.blueSquare, backView: self.redSquare)
}
let transitionOptions = UIViewAnimationOptions.TransitionCurlUp
UIView.transitionFromView(views.frontView, toView: views.backView, duration: 1.0, options: transitionOptions, completion: nil)
{% endhighlight %}


