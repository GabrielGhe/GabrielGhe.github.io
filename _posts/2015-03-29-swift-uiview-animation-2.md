---
layout: post
title: "Swift: UIView Animation 2"
description: ""
category: swift
tags: [ios, animation, uiview]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

This is part 2 of the animations post. In this post, we will look at how to add special animations to views. Like when you slide from the bottom of an iPhone and the menu appears with a small bounce.

<!-- Content -->
<h3>Content</h3>

Create a `UIDynamicAnimator`

<!-- Code _______________________________________-->
{% highlight swift linenos %}
var animator = UIDynamicAnimator(referenceView: UIView)
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


Add `UIDynamicBehavior`s to it (gravity, collisions etc.)

<!-- Code _______________________________________-->
{% highlight swift linenos %}
let gravity = UIGravityBehavior()
animator.addBehavior(gravity)
let collider = UICollisionBehavior()
animator.addBehavior(collider)
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


Add `UIDynamicItems` (usually UIViews) to the UIDynamicBehaviors.

<!-- Code _______________________________________-->
{% highlight swift linenos %}
let item1: UIDynamicItem = ... // usually a UIView
let item2: UIDynamicItem = ... // usually a UIView

gravity.addItem(item1)
collider.addItem(item1)
gravity.addItem(item2)
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

<!-- UIDynamicItem -->
<h3>UIDynamicItem</h3>

The `UIDynamicItem` protocol looks like this. `UIView` implements this protocol and if you change center or transform while the animator is running, you must call `this method in UIDynamicAnimator: `func updateItemUsingCurrentState(item: DynamicItem)`

<!-- Code _______________________________________-->
{% highlight swift linenos %}
protocol UIDynamicItem {
    var bounds: CGRect { get }
    var center: CGPoint { get set }
    var transform: CGAffineTransform { get set }
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


<!-- UIGravityBehavior -->
<h3>UIGravityBehavior</h3>

<!-- Code _______________________________________-->
{% highlight swift linenos %}
var angle: CGFloat      // in radians; 0 is to the right; positive numbers are counter-clockwise
var magniture: CGFloat  // 1.0 is 1000 points/s/s
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

<!-- UIAttachmentBehavior -->
<h3>UIAttachmentBehavior</h3>

<!-- Code _______________________________________-->
{% highlight swift linenos %}
init(item: UIDynamicItem, attachedToAnchor: CGPoint)
init(item: UIDynamicItem, attachedToItem: UIDynamicItem)
init(item: UIDynamicItem, offsetFromCenter: CGPoint, attachedToItem/Anchor...)
var length: CGFloat
var anchorPoint: CGPoint
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->
