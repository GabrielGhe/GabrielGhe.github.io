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

Let's start with the delegate since it's so simple. We'll make the TableView conform to this protocol and pass it to the TableViewCell. We detect a swipe inside the TableViewCell and then using the delegate, tell the TableView.

<!-- Code _______________________________________-->
{% highlight swift linenos=table %}
import UIKit

protocol TableViewCellDelegate {
    // tell the TableView that a swipe happened
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

Create the class and add it as the custom class of your TableViewCell in StoryBoard or in code.

![Title]({{ ASSET_PATH }}/../images/2016-03-20-swipable-uitableviewcell.png)

<!-- Code _______________________________________-->
{% highlight swift linenos=table %}
import UIKit

class MyTableViewCell: UITableViewCell {
    var delegate: TableViewCellDelegate?
    var originalCenter = CGPoint()
    var isSwipeSuccessful = false

    @IBOutlet weak var titleLabel: UILabel!

    override func awakeFromNib() {
        super.awakeFromNib()
        initialize()
    }

    func initialize() {}
    func handlePan(recognizer: UIPanGestureRecognizer) {}
    func checkIfSwiped(recognizer: UIPanGestureRecognizer) {}
    func moveViewBackIntoPlace(originalFrame: CGRect) {}
    override func gestureRecognizerShouldBegin(gestureRecognizer: UIGestureRecognizer) -> Bool {}
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->



In `initialize`, we add the gesture recongnizer. In `checkIfSwiped`, we translate the cell and see if we moved more than 50% of the cell's width. In `moveViewBackIntoPlace`, we just move back the cell into it's original position.

<!-- Code _______________________________________-->
{% highlight swift linenos=table %}
func initialize() {
    let recognizer = UIPanGestureRecognizer(target: self, action: "handlePan:")
    recognizer.delegate = self
    addGestureRecognizer(recognizer)
}

func checkIfSwiped(recongizer UIPanGestureRecognizer) {
    let translation = recognizer.translationInView(self)
    center = CGPointMake(originalCenter.x + translation.x, originalCenter.y)
    isSwipeSuccessful = frame.origin.x > frame.size.width / 2.0
}

func moveViewBackIntoPlace(originalFrame: CGRect) {
    UIView.animateWithDuration(0.2, animations: {self.frame = originalFrame})
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->



Our pan should recognize horizontal swipes only. It doesn't right now. Let's fix that.

<!-- Code _______________________________________-->
{% highlight swift linenos=table %}
override func gestureRecognizerShouldBegin(gestureRecognizer: UIGestureRecognizer) -> Bool {
    if let panGestureRecognizer = gestureRecognizer as? UIPanGestureRecognizer {
        let translation = panGestureRecognizer.translationInView(superview!)
        if fabs(translation.x) > fabs(translation.y) {
            return true
        }
    }
    return false
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->



Let's add the swipe code.

<!-- Code _______________________________________-->
{% highlight swift linenos=table %}
func handlePan(recognizer: UIPanGestureRecognizer) {
    if recognizer.state == .Began {
        originalCenter = center
    }
    
    if recognizer.state == .Changed {
        checkIfSwiped(recognizer)
    }

    if recognizer.state == .Ended {
        let originalFrame = CGRect(x: 0, y: frame.origin.y,
            width: bounds.size.width, height: bounds.size.height)
        if isSwipeSuccessful, let delegate = self.delegate {
            delegate.cardEdit("I performed a swipe")
        } else {
            moveViewBackIntoPlace(originalFrame)
        }
    }
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->




<!-- UITableViewController -->
<h4>UITableViewController</h4>

Add the protocol `TableViewCellDelegate` to the class and implement the method `hasPerformedSwipe`.

<!-- Code _______________________________________-->
{% highlight swift linenos=table %}
func hasPerformedSwipe(passedInfo: String) {
    let alert = UIAlertController(title: "Works", 
                        message: passedInfo, 
                        preferredStyle: UIAlertControllerStyle.Alert)
    let defaultAction = UIAlertAction(title: "OK", style: .Default, handler: nil)
    alert.addAction(defaultAction)
    presentViewController(alert, animated: true, completion: nil)
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


![Title]({{ ASSET_PATH }}/../images/2016-03-20-swipable-uitableviewcell.gif)