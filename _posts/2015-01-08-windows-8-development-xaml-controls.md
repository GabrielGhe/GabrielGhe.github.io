---
layout: post
title: "Windows 8 development: xaml controls"
description: ""
category: csharp
tags: [windows, windows phone, xaml, control]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

Windows 8.1 use the MVVM pattern for their apps. For their View, they use xaml, this post is about the different types of xaml properties.
More information can be found [here](http://msdn.microsoft.com/en-us/library/windows/apps/xaml/hh465351.aspx).

<!-- Examples -->
<h3>Examples</h3>

{% highlight html linenos %}

<!-- Button control with Click event -->
<Button x:Name="myButton" Click="myButton_Click" />

<!-- Acts like an html table -->
<Grid />

<!-- Holds <ColumnDefinition> controls, lives in Grid -->
<Grid.ColumnDefinitions></Grid.ColumnDefinitions>

<!-- Holds <RowDefinition> controls, lives in Grid -->
<Grid.RowDefinitions></Grid.RowDefinitions>

<!-- Rectangle -->
<Rectangle Fill="Blue" Height="100" Width="100" />

<!-- acts like a stack of controls (like floating left or top in case of Vertical orientation) -->
<StackPanel Orientation="Horizontal" />

<!-- holds text, if needs to be in Grid iff assigned grid properties -->
<TextBlock Grid.Row="0" />

{% endhighlight %}