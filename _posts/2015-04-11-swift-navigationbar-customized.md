---
layout: post
title: "Swift: UINavigationBar Customized"
description: ""
category: swift
tags: [ios, navigation, custom]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

The `UINavigationController` is widely used in iOS. We're going to look at how to customize one's `UINavigationBar`. You can find more information on both of these classes [here](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UINavigationBar_Class/index.html#//apple_ref/occ/cl/UINavigationBar).


<!-- Content -->
<h3>Content</h3>

<!-- Code _______________________________________-->
{% highlight swift linenos %}
func viewDidAppear(animated: Bool) {
    super.viewDidAppear(animated)

    // cache the bar
    var nav = self.navigationController?.navigationBar
    
    // Change the background color of the bar
    nav?.barTintColor = UIColor.blueColor()

    // Change the NavigationBar's back button color
    nav?.tintColor = UIColor.redColor()

    // Is the bar translucent
    nav?.translucent = true

    
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->