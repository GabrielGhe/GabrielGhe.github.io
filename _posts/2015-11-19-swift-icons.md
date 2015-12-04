---
layout: post
title: "Swift: Icons"
description: "Being able to add images is essential to any app. This post will show how to add an image form code. [This link](http://guides.codepath.com/ios/Adding-Image-Assets) is a beautiful guide on how to add an image from both code and in xcode's storyboard."
category: swift
tags: [ios, icon, image]
---
{% include JB/setup %}


<!-- Overview -->
<h3>Overview</h3>

Being able to add images is essential to any app. This post will show how to add an image form code. [This link](http://guides.codepath.com/ios/Adding-Image-Assets) is a beautiful guide on how to add an image from both code and in xcode's storyboard.


<!-- Content -->
<h3>Content</h3>

<!-- Code _______________________________________-->
{% highlight swift linenos=table  %}
// after adding the image to Assets.xcassets
var image = UIImage(named: "pig")
var imageView = UIImageView(image: image)
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->