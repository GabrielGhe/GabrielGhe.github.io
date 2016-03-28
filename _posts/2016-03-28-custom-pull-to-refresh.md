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