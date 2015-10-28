---
layout: post
title: "Swift: Parse"
description: "Parse is a database service for mobile owned by Facebook. This post will show you how easy it is to create a persistent cloud without writing a single line of code for the backend. You can get more information about Parse [here](http://blog.parse.com/2014/06/06/building-apps-with-parse-and-swift/)."
category: swift
tags: [ios, parse, facebook, persistance, database]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

Parse is a database service for mobile owned by Facebook. This post will show you how easy it is to create a persistent cloud without writing a single line of code for the backend. You can get more information about Parse [here](http://blog.parse.com/2014/06/06/building-apps-with-parse-and-swift/).


<!-- Content -->
<h3>Content</h3>

You first need the bridging header. So create an objective-c `.m` file of any name. You will be prompted to add a bridge header, accept. Now you can remove the initial objective-c file that you created (we only needed the bridge header).

Add the following import into the briding header so that you can use those them in swift.

<!-- Code _______________________________________-->
{% highlight c++ linenos %}
#import <Parse/Parse.h>
// or #import <ParseOSX/ParseOSX.h>
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

Now that you have the library, you can use it in Swift. To add an object and save it.

<!-- Code _______________________________________-->
{% highlight swift linenos %}
var honeyObject = PFObject(className: "Dogs")
honeyObject.setObject(2, forKey: "age")
honeyObject.setObject("Honey", forKey: "dogName")
honeyObject.saveInBackgroundWithBlock { 
    (success: Bool!, error: NSError!) -> Void in
    if success {
        println("Object created with id: \(honeyObject.objectId)")
    } else {
        // error
    }
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


If you want to retrieve it, you do the following.

<!-- Code _______________________________________-->
{% highlight swift linenos %}
var query = PFQuery(className: "Dogs")
query.getObjectInBackgroundWithId(honeyObject.objectId) {
    (honeyObjectAgain: PFObject!, error: NSError!) -> Void in
    if !error {
        println("We found a dog named \(honeyObjectAgain.objectForKey("dogName") as NSString))
    } else {
        // error
    }
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->