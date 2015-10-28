---
layout: post
title: "Swift: ViewController Lifecycle"
description: "The lifecycle for a ViewController is as follows."
category: swift
tags: [ios, viewcontroller]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

The lifecycle for a ViewController is as follows.

<!-- Content -->
<h3>Content</h3>

1. Instantiated (from storyboard or code)
2. awakeFromNib
3. segue preparation happens
4. outlets get set
5. viewDidLoad
6. viewWillAppear/viewDidAppaer and viewWillDisappear/viewDidDisappear
7. viewWillLayoutSubviews


<!-- Lifecycle Methods -->
<br />
<h4>Lifecycle Methods</h4>

<!-- Code _______________________________________-->
{% highlight swift linenos %}
override func viewDidLoad() {
    // call super's version at beginning or end
    super.viewDidLoad()
    // do more setup
    // update your ui
    // geometry is not set yet (bounds)
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


<!-- Code _______________________________________-->
{% highlight swift linenos %}
func viewWillAppear(animated: Bool) {
    // every time the view gets displayed
    // geometry is set (bounds)
}
func viewDidAppear(animated: Bool)
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


<!-- Code _______________________________________-->
{% highlight swift linenos %}
override func viewWillDisappear(animated: Bool) {
    super.viewWillDisappear(animated)
    // clean up stuff
    // get rid of image
}
func viewDidDisappear(animated: Bool)
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


<!-- Code _______________________________________-->
{% highlight swift linenos %}
// your geometry has changed (rotate)
func viewWillLayoutSubviews()
func viewDidLayoutSubviews()
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->