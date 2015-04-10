---
layout: post
title: "Windows 8 development: navigate to a page"
description: ""
category: csharp
tags: [c#, windows, windows phone, navigation]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

In mobile apps, we often navigate to different pages. In this post, we will see how to do that on the windows phone. More information can be found [here](https://www.youtube.com/watch?v=kkUaC-sOJPQ).

<!-- Details -->
<h3>Details</h3>

We will have `MainPage` which will have a button whos click event takes us to a new page, `Page2`.

MainPage xaml will have a button that will take you to the next page.

{% highlight html linenos %}
  <Button Content="Go to Page2" onClick="Button_Click" />
{% endhighlight %}

The click event for that button will look like this.

{% highlight csharp linenos %}
// MainPage
private void Button_Click(object sender, RoutedEventArgs e) {
  Frame.Navigate(typeof(Page2), "This is extra data that I'm sending to Page2");
}
{% endhighlight %}

On Page2, we can get the parameters passed when we changed pages in the `OnNavigatedTo` method.

{% highlight csharp linenos %}
// Page2
protected override void OnNavigatedTo(NavigationEventArgs e) {
  Console.WriteLine( e.Parameter.ToString() );
}
{% endhighlight %}