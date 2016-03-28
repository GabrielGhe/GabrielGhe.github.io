---
layout: post
title: "Custom Pull to Refresh"
description: "
The pull to refresh feature has become indispensible in modern iOS apps. This post will show you how to make a custom pull-to-refresh feature for your UITableView. To understand how to create this feature, I read [this post from appcoda](http://www.appcoda.com/custom-pull-to-refresh/) and [this post from jackrabbitmobile](http://www.jackrabbitmobile.com/design/ios-custom-pull-to-refresh-control/).
"
category: swift
tags: [ios, tableview]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

{{ page.description }}

<!-- Content -->
<h3>Content</h3>

Before we begin, you should read [my UITableView post]({% post_url 2015-03-28-swift-uitableview %}) and create a UITableView.

After following that post, you should have this.

![Inital view]({{ ASSET_PATH }}/../images/2016-03-28-custom-pull-to-refresh.png)

In the UITableViewController, we're going to add a [UIRefreshControl](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIRefreshControl_class/).

<!-- Code _______________________________________-->
{% highlight swift linenos=table %}
var refreshControl: UIRefreshControl!

override func viewDidLoad() {
  ...
  refreshControl = createRefreshControl()
  self.tableView.addSubview(refreshControl)
  ...
}

func createRefreshControl() {
  let refreshControl = UIRefreshControl()
  refreshControl.addTarget(self, action: "refresh:", forControlEvents: .ValueChanged)
  return refreshControl
}

func refresh(refreshControl: UIRefreshControl) {
  refreshControl.endRefreshing()
} 
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

Which will give you this.

![Pull to Refresh 1]({{ ASSET_PATH }}/../images/2016-03-28-custom-pull-to-refresh.gif)




<!-- Custom Reload -->
<h4>Custom Reload</h4>

We will now create a .xib file (File -> New File -> iOS User Interface -> Empty) and update it to look like this with a Label in the middle. I named this file `RefreshContents.xib`.

![Xib of Refresh]({{ ASSET_PATH }}/../images/2016-03-28-custom-pull-to-refresh2.png)

You can paste this into the .xib's source code over `<objects>` to have it look like mine. (Right click .xib file -> open as -> source)

<!-- Code _______________________________________-->
{% highlight xml linenos=table %}
<objects>
  ...

  <view contentMode="scaleToFill" id="qv9-k9-4pZ">
    <rect key="frame" x="0.0" y="0.0" width="600" height="60"/>
    <autoresizingMask key="autoresizingMask" widthSizable="YES" heightSizable="YES"/>
    
    <subviews>
        <label opaque="NO" userInteractionEnabled="NO"
        contentMode="left" horizontalHuggingPriority="251"
        verticalHuggingPriority="251" misplaced="YES" 
        text="GabrielGhe Reloader" textAlignment="center" 
        lineBreakMode="tailTruncation" 
        baselineAdjustment="alignBaselines" adjustsFontSizeToFit="NO"
        translatesAutoresizingMaskIntoConstraints="NO" id="lIm-6c-Dpw">
            <rect key="frame" x="218" y="19" width="165" height="21"/>
            <fontDescription key="fontDescription" style="UICTFontTextStyleBody"/>
            <color key="textColor" cocoaTouchSystemColor="darkTextColor"/>
            <nil key="highlightedColor"/>
        </label>
    </subviews>

    <color key="backgroundColor" red="0.92549020049999997" 
      green="0.94117647410000005" blue="0.94509804249999996"
      alpha="1" colorSpace="calibratedRGB"/>

    <constraints>
        <constraint firstItem="lIm-6c-Dpw" firstAttribute="centerY" 
          secondItem="qv9-k9-4pZ" secondAttribute="centerY" id="Qdc-EZ-PRN"/>
        <constraint firstItem="lIm-6c-Dpw" firstAttribute="centerX"
          secondItem="qv9-k9-4pZ" secondAttribute="centerX" id="vzL-Om-zJi"/>
    </constraints>

    <nil key="simulatedStatusBarMetrics"/>
    <freeformSimulatedSizeMetrics key="simulatedDestinationMetrics"/>
  </view>

  ...
</objects>
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

We have to load this .xib and have it be displayed instead of the spinner. We'll do this in the `loadCustomRefreshContents()`. The rest of the code should be the same with the exception of making the refreshControl's background and tint clear.

<!-- Code _______________________________________-->
{% highlight swift linenos=table %}
var refreshControl: UIRefreshControl!
var customRefreshView: UIView!

override func viewDidLoad() {
  refreshControl = createRefreshControl()
  loadCustomRefreshContents()
  self.tableView.addSubview(refreshControl)
}

func createRefreshControl() {
  let refreshControl = UIRefreshControl()
  refreshControl.addTarget(self, action: "refresh:", forControlEvents: .ValueChanged)
  refreshControl.backgroundColor = UIColor.clearColor()
  refreshControl.tintColor = UIColor.clearColor()
  return refreshControl
}

func refresh(refreshControl: UIRefreshControl) {
  refreshControl.endRefreshing()
}

func loadCustomRefreshContents() {
    let refreshContents = NSBundle.mainBundle()
                            .loadNibNamed("RefreshContents", owner: self, options: nil)
    customRefreshView = refreshContents[0] as! UIView
    customRefreshView.frame = refreshControl.bounds
    refreshControl.addSubview(customRefreshView)
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

The end result is this.

![End Result]({{ ASSET_PATH }}/../images/2016-03-28-custom-pull-to-refresh2.gif)

Of course, it still needs work since it looks a bit glitchy when it first appears and disappears. I'll cover that in part 2.