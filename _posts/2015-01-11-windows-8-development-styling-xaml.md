---
layout: post
title: "Windows 8 development: styling xaml"
description: ""
category: csharp
tags: [windows, windows phone, xaml, styling]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

In this post, I will be talking about how to style xaml controls. Similar to css, we can create styles that can be reused for multiple controls throughout our solution. More information can be found here [here](https://www.youtube.com/watch?v=97u6eB4X8yU&t=5860).

<!-- Details -->
<h3>Details</h3>

{% highlight html linenos %}
<Page.Resources>
  <SolidColorBrush x:Key="MyBrush" Color="Brown" />
</Page.Resources>

<StackPanel>
  <TextBlock Text="Some text" Foreground="{StaticResource MyBrush}" />

  <TextBlock Text="Some text" Foreground="{}" />

  <Button Content="Some text" Background="{StaticResource MyBrush}" />
</StackPanel>
{% endhighlight %}

We first create a `<Page.Resources>` element. Inside we create a `<SolidColorBrush>` that we can reuse by using it's key, `MyBrush`. To use it, we have to use the following syntax: `"{StaticResource MyBrush}"`.

![Results]({{ ASSET_PATH }}images/2015-01-11-windows-8-development-styling-xaml-1.png)