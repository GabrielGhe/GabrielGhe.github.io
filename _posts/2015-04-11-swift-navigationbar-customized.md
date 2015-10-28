---
layout: post
title: "Swift: UINavigationBar Customized"
description: "The `UINavigationController` is widely used in iOS. We're going to look at how to customize one's `UINavigationBar`. You can find more information on both of these classes [here](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UINavigationBar_Class/index.html#//apple_ref/occ/cl/UINavigationBar)."
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

    // Create an imageView to place instead of the NavigationBar title
    let imageView = UIImageView(frame: CGRect(x: 0, y: 0, width: 40, height: 40))
    imageView.contentMode = .ScaleAspectFit

    // Put an image inside the imageView
    let image = UIImage(named: "MyImage")
    imageView.image = image

    // place it instead of the title
    self.navigationItem.titleView = imageView
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

You can find the properties of a `UINavigationItem` [here](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UINavigationItem_Class/index.html#//apple_ref/doc/uid/TP40006933-CH3-SW13).

You can find the properties of a `UINavigationController` [here](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UINavigationController_Class/index.html).