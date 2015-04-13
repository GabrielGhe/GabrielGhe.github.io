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


<br />
<h4>UITableViewDataSource: handles what needs to be displayed</h4>

You can find more information about the protocol [here]((https://developer.apple.com/library/prerelease/ios/documentation/UIKit/Reference/UITableViewDataSource_Protocol/index.html)).

<!-- Code _______________________________________-->
{% highlight swift linenos %}
func numberOfSectionsInTableView(tableView: UITableView) -> Int {
    return myData.count // default is 1
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

<!-- Code _______________________________________-->
{% highlight swift linenos %}
func tableView(tableView: UITableView, 
    numberOfRowsInSection section: Int) 
                        -> Int {
    return myData[section].count
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

<!-- Code _______________________________________-->
{% highlight swift linenos %}
func tableView(tableView: UITableView, 
  cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {

    let cell = tableView.dequeueReusableCellWithIdentifier("CellReuseIdentifier",
                        forIndexPath: indexPath) as UITableViewCell

    // Configure cell

    return cell
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

<!-- Code _______________________________________-->
{% highlight swift linenos %}
func tableView(tableView: UITableView,
  commitEditingStyle editingStyle: UITableViewCellEditingStyle,
      forRowAtIndexPath indexPath: NSIndexPath) {

    if editingStyle == UITableViewCellEditingStyle.Delete {
      yourData.removeAtIndex(indexPath.row)
      tableView.deleteRowsAtIndexPaths( [indexPath],
                      withRowAnimation: UITableViewRowAnimation.Automatic)
    }
  }
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

<br />
<h4>UITableViewDelegate: handles cell selection and modification</h4>

There are too many to show here, but you can look them up. You can find them all [here](https://developer.apple.com/library/prerelease/ios/documentation/UIKit/Reference/UITableViewDelegate_Protocol/index.html). One important event is the `didSelectRowAtIndexPath`.

<!-- Code _______________________________________-->
{% highlight swift linenos %}
func tableView(sender: UITableView, didSelectRowAtIndexPath indexPath: NSIndexPath) {
    // do stuff with indexPath.row and indexPath.section
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


<br />
<h4>Segues</h4>

If you also embed the UITableView inside of a UINavigationController, you can navigate to a new UIView when selecting a row. After you `control+drag` from the prototype/static cell to the new view, you can name the segue to know which row fired the event. Everytime you click a row, `prepareForSegue` is called, where you can handle the segue.

<!-- Code _______________________________________-->
{% highlight swift linenos %}
// sender is what launched the event (can be UITableViewCell or UIButton)
func prepareForSegue(segue: UIStoryboardSegue, sender: AnyObject) {
    if let identifier = segue.identifier {
        switch identifier {
            case "RandomSegueIdentifier": // handle "RandomSegueIdentifier"
            case "AnotherSegueIdentifier":
                let cell = sender as MyTableViewCell
                if let indexPath = tableView.indexPathForCell(cell) {
                    let seguedToMVC = segue.destinationViewController as MyVC
                    seguedToMVC.publicAPI = data[indexPath.section][indexPath.row]
                }
            default: break
        }
    }
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

<!-- Bonus -->
<h3>Bonus</h3>

If you make a custom `UITableViewCell` and want to have the height be dynamic. You can do the following in `viewDidLoad`.

<!-- Code _______________________________________-->
{% highlight swift linenos %}
func viewDidLoad() {
    super.viewDidLoad()
    tableView.estimatedRowHeight = tableView.rowHeight
    tableView.rowHeight = UITableViewAutomaticDimension
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

If you want to have a "pull to refresh", you can add the refresh control on the TableView. In the inspector, you can set refreshing to Enabled and modify the refresh control from the left side menu in the storyboard.

![Image of refreshing]({{ ASSET_PATH }}images/2015-03-28-swift-uitableview.png)

