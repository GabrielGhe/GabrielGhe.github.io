---
layout: post
title: "Swift: UITableView"
description: ""
category: swift
tags: [ios, table]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

TableViews are used everywhere in iOS dev which is why you have to know it. You can find more information about UITableViews [here](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITableView_Class/).

<!-- Content -->
<h3>Content</h3>

You start off with a `UITableView` or `UITableViewController`. The 2 protocols that you need to use a `UITableView` are the following.


<h4>UITableViewDataSource (handles what needs to be displayed)</h4>

<!-- Code _______________________________________-->
{% highlight swift linenos %}
override func numberOfSectionsInTableView(tableView: UITableView) 
                                          -> Int {
    return myData.count // default is 1
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

<!-- Code _______________________________________-->
{% highlight swift linenos %}
override func tableView(tableView: UITableView, 
                        numberOfRowsInSection section: Int) 
                        -> Int {
    return myData[section].count
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

<!-- Code _______________________________________-->
{% highlight swift linenos %}
override func tableView(tableView: UITableView, 
                        cellForRowAtIndexPath indexPath: NSIndexPath) 
                        -> UITableViewCell {
    let cell = tableView.dequeueReusableCellWithIdentifier("CellReuseIdentifier",
                                                           forIndexPath: indexPath) 
                                                           as UITableViewCell

    // Configure cell

    return cell
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

