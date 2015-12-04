---
layout: post
title: "Swift: Add Shadow To UIButton"
description: "Quick gist of how to add shadow to a UIButton"
category: swift
tags: [ios, button, shadow]
---
{% include JB/setup %}

<!-- Content -->
<h3>Content</h3>

<!-- Code _______________________________________-->
{% highlight swift linenos=table  %}
func viewDidLoad() {
    super.viewDidLoad()

    // make the shadow
    myButton.layer.shadowOffset = CGSizeMake(5, 5)

    // set the radius
    myButton.layer.shadowRadius = 5

    // change the color of the shadow (has to be CGColor)
    myButton.layer.shadowColor = UIColor.blueColor().CGColor
    
    // display the shadow
    myButton.layer.shadowOpacity = 1.0
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->