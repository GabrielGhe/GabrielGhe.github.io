---
layout: post
title: "UITableView and UISearchBar"
description: ""
category: swift
tags: ["ios", "ui"]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

While working on an iOS app, I needed to have a TableView that was searchable. After looking it up, I found out that
I could use a Table View and add a Search Bar and Search Display.

<!-- Controls -->
<h3>Controls</h3>

TableView will display the data, we just have to supply the functions that tell the table view what to show.

![TableView]({{ ASSET_PATH }}images/1.png)

The Search Bar doesn't do anything except alert us when the search query was changed... We have to implement
the search functionality ourselves. The search display is the dropdown that appears with suggestions once you type something
in the search bar.

![Search Display]({{ ASSET_PATH }}images/2.png)

<!-- Directions -->
<h3>Directions</h3>

First we drag and drop a UIViewController to our storyboard.
Then we drag and drop a Table View inside that ViewController and a Search Bar and Search Display above the TableView.

Note: Search Bar and Search Display is 1 control.

Now we need the implementation. Create a file that is a subclass of UIViewController and add the following protocols.

<!-- Code -->
{% highlight swift linenos %}
class YourViewController: UIViewController, UITableViewDataSource, UITableViewDelegate, UISearchBarDelegate, UISearchDisplayDelegate
{% endhighlight %}
<!-- END Code -->

We have to implement the following functions now.

<!-- Code -->
{% highlight swift linenos %}
// How many rows to display
func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int

// What to display for a particular row
func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell

// How many sections (only 1 in our case)
func numberOfSectionsInTableView(tableView: UITableView) -> Int {

// the searchString has changed, we have to update our array
func searchDisplayController(controller: UISearchDisplayController, shouldReloadTableForSearchString searchString: String!) -> Bool 

// the searchString has changed, we have to update our array
func searchDisplayController(controller: UISearchDisplayController!, shouldReloadTableForSearchScope searchOption: Int) -> Bool
{% endhighlight %}
<!-- END Code -->

<!-- TableView functions -->
<br/><br/>
<h3>TableView functions</h3>

<!-- Code -->
{% highlight swift linenos %}
func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
  if (tableView == self.searchDisplayController?.searchResultsTableView) {
      return searchResults.count
  } else {
      return data.count
  }
}

func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
  let cell = myTableView.dequeueReusableCellWithIdentifier("cell") as UITableViewCell
        
  if (tableView == self.searchDisplayController?.searchResultsTableView) {
      cell.textLabel?.text = searchResults[indexPath.row]
  } else {
      cell.textLabel?.text = data[indexPath.row]
  }
  return cell
}

func numberOfSectionsInTableView(tableView: UITableView) -> Int {
  return 1
}
{% endhighlight %}
<!-- END Code -->


There are 2 important things to note. 

1. On line **2** and **12**, we're checking if the tableView that is calling
this function is the searchDisplay tableView or not. We need to check to be able to return the right data.

2. On line **10**, we're using myTableView. The searchDisplay TableView doesn't actually have a prototype cell so we're using
the one from our main tableView.

<!-- SearchBar functions -->
<br/><br/>
<h3>SearchBar functions</h3>

<!-- Code -->
{% highlight swift linenos %}
func searchDisplayController(controller: UISearchDisplayController, shouldReloadTableForSearchString searchString: String!) -> Bool {
  filterContentForSearchText(searchString)
  return true
}

func searchDisplayController(controller: UISearchDisplayController!, shouldReloadTableForSearchScope searchOption: Int) -> Bool {
  filterContentForSearchText(self.searchDisplayController!.searchBar.text)
  return true
}

func filterContentForSearchText(searchText:String) {
    let temp = data.reduce([], combine: +) // to flatten array
    searchResults = temp.filter {
        var ret = false
        if $0.lowercaseString.rangeOfString(searchText) != nil {
            ret = true
        }
        return ret
    }
}

{% endhighlight %}
<!-- END Code -->