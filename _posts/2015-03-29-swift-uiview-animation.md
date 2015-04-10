---
layout: post
title: "Swift: UIView Animation"
description: ""
category: swift
tags: [ios, animation, uiview]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

Animations and transitions are extremely important in iOS development. That's why you have to know them (I feel like I say that a lot...)! You can find more information about animations [here](http://www.raywenderlich.com/76200/basic-uiview-animation-swift-tutorial).

<!-- Content -->
<h3>Content</h3>

<!-- animateWithDuration -->
<h4>animateWithDuration</h4>

This function only works with the alpha, frame and transform props of a UIView. You can use this to fade in, rotate the view or the size.

<!-- Code _______________________________________-->
{% highlight swift linenos %}
class UIView {
    class func animateWithDuration(duration: NSTimeInterval,
                                      delay: NSTimeInterval,
                                    options: UIViewAnimationOptions,
                                 animations: () -> Void,
                                 completion: ((finished: Bool) -> Void)? )
}

if myView.alpha = 1.0 {
    UIView.animateWithDuration(3.0,
                        delay: 2.0,
                      options: UIViewAnimationOptions.CurveEaseInEaseOut,
                   animations: { myView.alpha = 0.0 },
                   completion: { if $0 { myView.removeFromSuperview()}} )
}
/*
Fade myView out over 3 seconds starting 2 seconds from now.
When done, remove myView from view hierarchy if the fade completed.
 */
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

<!-- Code _______________________________________-->
{% highlight swift linenos %}
/*
UIViewAnimationOptions

  BeginFromCurrentState       // interrupt other, in-progress animations of these props
  AllowUserInteraction        // allow gestures to get processed while animation is in progress
  LayoutSubviews              // animate the relayout of subviews with parent's animation
  Repeat                      // repeat indefinitely
  Autoreverse                 // play animation forward then back
  OverrideInheritedDuration   // if not set, use duration of any in-progress animation
  OverrideInheritedCurve      // if not set, use curve of in-progress animation
  Allow AnimatedContent       // if not set, just interpolate between current and end
  CurveEaseInEaseOut          // slower at first, normal middle, slow end
  CurveEaseIn                 // slow at first, constant else
  CurveLinear                 // same speed
 */
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


<!-- transitionWithView -->
<h4>transitionWithView</h4>

This one allows you to make an entire view modification at once.

<!-- Code _______________________________________-->
{% highlight swift linenos %}
class UIView {
    class func transitionWithView(view: UIView,
                              duration: NSTimeInterval,
                               options: UIViewAnimationOptions,
                            animations: () -> Void,
                            completion: ((finished: Bool) -> Void)? )
}

UIView.transitionWithView(view: myPlayingCardView,
                      duration: 0.75,
                       options: UIViewAnimationOptions.TransitionFlipFromLeft,
                    animations: { cardIsFaceUp = !cardIsFaceUp},
                    completion: nil )
/*
myPlayingCardView draws itself face up or down depending on `cardIsFaceUp`.
This will cause the card to flip over.
 */
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->