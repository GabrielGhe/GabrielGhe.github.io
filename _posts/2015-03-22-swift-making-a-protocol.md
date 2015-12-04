---
layout: post
title: "Swift: Making a Protocol"
description: "In the MVC design pattern, the model does not have access to the controller. But it has to let the controller know somehow that its data has changed. To do that it uses a `protocol`. A `protocol` is basically an `interface` in Java. Here's how you would use it in swift."
category: swift
tags: [ios, delegate, protocol]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

In the MVC design pattern, the model does not have access to the controller. But it has to let the controller know somehow that its data has changed. To do that it uses a `protocol`. A `protocol` is basically an `interface` in Java. Here's how you would use it in swift.

<!-- Content -->
<h3>Content</h3>

**Protocol**

<!-- Code _______________________________________-->
{% highlight swift linenos=table  %}
// can only be implemented by a class
protocol FaceViewDataSource: class {
    func smilinessForFaceView(sender: FaceView) -> Double
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

**View**

<!-- Code _______________________________________-->
{% highlight swift linenos=table  %}
class FaceView: UIView {
    ...

    // has to be weak... if this points to the controller
    // and the controller points to this model, they're keeping each
    // other in memory.
    weak var dataSource: FaceViewDataSource?
    override func drawRect(rect: CGRect){
        let smiliness = dataSource?.smilinessForFaceView(self) ?? 0.0
    }
    ...
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

**Controller/Model**

<!-- Code _______________________________________-->
{% highlight swift linenos=table  %}
class HappinessController: UIViewController, FaceViewDataSource {
    // outlet to the UIView inside the controller
    @IBOutlet weak var faceView: FaceView! {
        didSet {
            faceView.dataSource = self
        }
    }

    var happiness: Int = 75 { // Model
        didSet {
            // 0 <= happiness <= 100
            happiness = min(max(happiness, 0), 100)
            // says that the view needs to be redrawn
            faceView.setNeedsDisplay()
        }
    }
    func smilinessForFaceView(sender: FaceView) -> Double? {
        return Double(75)
    }
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->