---
layout: post
title: "Swipable UITableViewCell"
description: "
This post will show you how to add a custom swipe action to your TableViewCells. I was trying out [Ray's guide to swipable cells](https://www.raywenderlich.com/77974/making-a-gesture-driven-to-do-list-app-like-clear-in-swift-part-1) and wanted to make a post that about the least amount of code needed to make a swipable cell.
"
category: swift
tags: [ios, mobile, swipe]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

{{ page.description }}

<!-- Content -->
<h3>Content</h3>

We need 3 classes.

- TableViewCellDelegate
- UITableViewCell
- UITableViewController

Assuming that you've already created a working TableViewController from my [TableView post]({% post_url 2015-03-28-swift-uitableview %}), we can get started.



<!-- TableViewCellDelegate -->
<h4>TableViewCellDelegate</h4>

Let's start with the delegate since it's so simple.

<!-- Code _______________________________________-->
{% highlight swift linenos=table %}
import UIKit

protocol TableViewCellDelegate {
    func hasPerformedSwipe(passedInfo: String)
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->



<!-- UITableViewCell -->
<h4>UITableViewCell</h4>

We need the following methods in this class:
- initialize: to add the gesture recognizer for swiping
- handlePan: to handle the swiping
- checkIfSwiped: to check if a swipe was performed
- moveViewBackIntoPlace: to move the cell back in place
- gestureRecognizerShouldBegin: to only let the swipe work horizontally

<!-- Code _______________________________________-->
{% highlight swift linenos=table %}

{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->