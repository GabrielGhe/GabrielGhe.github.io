---
layout: post
title: "Windows 8 Development: xaml properties"
description: ""
category: csharp
tags: [windows, windows phone, xaml]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

Windows 8.1 use the MVVM pattern for their apps. For their View, they use xaml, this post is about the different types of xaml properties.
More information can be found [here](http://www.volatileread.com/Wiki/Index?id=1075).

<!-- Examples -->
<h3>Examples</h3>

{% highlight html linenos %}
<!-- variable name to be used in code -->
<Button x:Name="myButton" />

<!-- background color -->
<Button Background="Blue" />

<!-- text on the button -->
<Button Content="This is the text you'll see" />

<!-- font size in pixels -->
<Button FontSize="42" />

<!-- align Left or Right -->
<Button HorizontalAlighment="Left" />

<!-- Margin <left,top,right,bottom> vs css' <top,right,bottom,left> -->
<Button Margin="0,20,0,5" />

<!-- align Top or Down -->
<Button VerticalAlighment="Top" />

<!-- Height and Width in pixels -->
<Button Height="100" Width="100" />

<!-- text to be displayed -->
<Label Text="Hello, XAML!" />

<!-- text color  -->
<Label TextColor="Aqua" />
{% endhighlight %}