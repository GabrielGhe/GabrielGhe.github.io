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

1. Create a `UIDynamicAnimator`

<!-- Code _______________________________________-->
{% highlight swift linenos %}
var animator = UIDynamicAnimator(referenceView: UIView)
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


2. Add `UIDynamicBehavior`s to it (gravity, collisions etc.)

<!-- Code _______________________________________-->
{% highlight swift linenos %}
let gravity = UIGravityBehavior()
animator.addBehavior(gravity)
let collider = UICollisionBehavior()
animator.addBehavior(collider)
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


3. Add `UIDynamicItems` (usually UIViews) to the UIDynamicBehaviors.

<!-- Code _______________________________________-->
{% highlight swift linenos %}
let item1: UIDynamicItem = ... // usually a UIView
let item2: UIDynamicItem = ... // usually a UIView

gravity.addItem(item1)
collider.addItem(item1)
gravity.addItem(item2)
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


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
