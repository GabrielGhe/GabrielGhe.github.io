---
layout: post
title: "Swift: ViewController Lifecycle"
description: ""
category: swift
tags: [ios, viewcontroller]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

The lifecycle for a ViewController is as follows.

<!-- Content -->
<h3>Content</h3>

1. Creation
2. Preparation if being segued to
3. Outlet setting
4. Appearing and disappearing
5. Geometry changes
6. Low-memory situations


<!-- Lifecycle Methods -->
<br /><h4>Lifecycle Methods<h4>

<!-- Code _______________________________________-->
{% highlight swift linenos %}
override func viewDidLoad() {
    // call super's version at beginning or end
    super.viewDidLoad()
    // do more setup
    // update your ui
    // geometry is not set yet(screen size etc)
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

