---
layout: post
title: "Swift: Gestures"
description: ""
category: swift
tags: [ios, gestures, swipe, pinch]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

Gestures are a big part of mobile development. This post is all about how to add gestures in iOS dev. You can find more information about gestures on [Ray Wenderlich's site](http://www.raywenderlich.com/76020/using-uigesturerecognizer-with-swift-tutorial) or on [ioscreator](http://www.ioscreator.com/tutorials/detecting-swipe-gesture-tutorial-ios8-swift).

<!-- Content -->
<h3>Content</h3>

**Pan Gesture**

<!-- Code _______________________________________-->
{% highlight swift linenos %}
@IBOutlet weak var pannableView: UIView {
    didSet {
        // the ':' means that the method pan will be called with an argument
        let recognizer = UIPanGestureRecognizer(target: self, action: "pan:")
        pannableView.addGestureRecognizer(recognizer)
    }
}
func pan(gesture: UIPanGestureRecognizer) {
    switch gesture.state {
        case .Changed: fallthrough
        case .Ended:
            let translation = gesture.translationInView(pannableView)
            // update anything that depends on the pan gesture using tranlation.x and .y
            gesture.setTranslation(CGPointZero, inView:pannableView)
    }
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


**Pinch**

<!-- Code _______________________________________-->
{% highlight swift linenos %}
@IBOutlet weak var pinchableView: UIView {
    didSet {
        let recognizer = UIPinchGestureRecognizer(target: self, action: "pinch:")
        pinchableView.addGestureRecognizer(recognizer)
    }
}
func pinch(gesture: UIPinchGestureRecognizer) {
    switch gesture.state {
        case .Began:
        case .Changed:
        case .Ended:
        case .Recognized
    }
    var scale:CGFloat = gesture.scale        // can reset
    var velocity:CGFloat = gesture.velocity  // readonly how fast you pinch
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


**Rotate**

<!-- Code _______________________________________-->
{% highlight swift linenos %}
@IBOutlet weak var rotatableView: UIView {
    didSet {
        let recognizer = UIRotationGestureRecognizer(target: self, action: "rotate:")
        rotatableView.addGestureRecognizer(recognizer)
    }
}
func rotate(gesture: UIRotationGestureRecognizer) {
    var rotation:CGFloat = gesture.rotation  // can reset
    var velocity:CGFloat = gesture.velocity  // readonly how fast you rotate
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


**Swipe**

<!-- Code _______________________________________-->
{% highlight swift linenos %}
@IBOutlet weak var swipableView: UIView {
    didSet {
        let recognizer = UISwipeGestureRecognizer(target: self, action: "swipe:")
        rotatableView.addGestureRecognizer(recognizer)
    }
}
func swipe(gesture: UISwipeGestureRecognizer) {
    var direction:UISwipeGestureRecognizerDirection = gesture.direction
    var numberOfTouchesRequired:Int = gesture.numberOfTouchesRequired
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


**Tap**

<!-- Code _______________________________________-->
{% highlight swift linenos %}
@IBOutlet weak var tapableView: UIView {
    didSet {
        let recognizer = UITapGestureRecognizer(target: self, action: "tap:")
        rotatableView.addGestureRecognizer(recognizer)
    }
}
func tap(gesture: UITapGestureRecognizer) {
    var numberOfTapsRequired:Int = gesture.numberOfTapsRequired // single tap, double tap, etc
    var numberOfTouchesRequired:Int = gesture.numberOfTouchesRequired
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->