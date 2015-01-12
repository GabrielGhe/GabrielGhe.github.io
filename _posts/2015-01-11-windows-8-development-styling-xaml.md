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

<!-- Local -->
<h3>Local Style</h3>

{% highlight html linenos %}
<Page.Resources>
  <SolidColorBrush x:Key="MyBrush" Color="Brown" />
</Page.Resources>

<StackPanel>
  <TextBlock Text="Some text" Foreground="{StaticResource MyBrush}" />

  <Button Content="Some text" Background="{StaticResource MyBrush}" />
</StackPanel>
{% endhighlight %}

We first create a `<Page.Resources>` element. Inside we create a `<SolidColorBrush>` that we can reuse by using it's key, `MyBrush`. To use it, we have to use the following syntax: `"{StaticResource MyBrush}"`.

![Results]({{ ASSET_PATH }}images/2015-01-11-windows-8-development-styling-xaml-1.png)

The style above can be applied to anything and it's simple. Let's create a more complicated style that can be applied only to buttons.

{% highlight html linenos %}
<Page.Resources>
  <Style TargetType="Button" x:Key="MyButtonStyle">
    <Setter Property="Background" Value="Blue" />
    <Setter Property="FontFamily" Value="Arial Black" />
    <Setter Property="FontSize" Value="36" />
  </Style>
</Page.Resources>

<StackPanel>
  <Button Content="My Brush Example" Style="{StaticResource MyButtonStyle}" />
</StackPanel>
{% endhighlight %}

Keep in mind that if we now apply `Background="Green"` to the Button *directly*, it will take precedence over the style. Even if we bind a color to it.

![Results]({{ ASSET_PATH }}images/2015-01-11-windows-8-development-styling-xaml-2.png)

<br /><br /><br />

<!-- Global -->
<h3>Global Style</h3>

The code above (Local) works only on the page where the `<Style>` was declared. To create a style which can be used anywhere, we have to create an `<Application.Resources>` tag inside `App.xaml`.

{% highlight html linenos %}
<Application.Resources>
  <Style TargetType="Button" x:Key="MyButtonStyle">
    <Setter Property="Background" Value="Blue" />
    <Setter Property="FontFamily" Value="Arial Black" />
    <Setter Property="FontSize" Value="36" />
  </Style>
</Application.Resources>
{% endhighlight %}

<!-- Themes -->
<h3>Themes</h3>

On the windows phone, people can set their own colors and backgrounds. By going in `Settings`, they can set specific themes that apply to tiles and to apps that take advantage of these settings. Let's change the `Background` to the background chosen by the user in his settings.

{% highlight html linenos %}
<Application.Resources>
  <Style TargetType="Button" x:Key="MyButtonStyle">
    <Setter Property="Background" Value="{ThemeResource PhoneAccentBrush}" />
    <Setter Property="FontFamily" Value="Arial Black" />
    <Setter Property="FontSize" Value="36" />
  </Style>
</Application.Resources>
{% endhighlight %}

We use the device menu to change the accent color to yellow and we change the theme to `Light`.

![Results]({{ ASSET_PATH }}images/2015-01-11-windows-8-development-styling-xaml-4.png)
![Results]({{ ASSET_PATH }}images/2015-01-11-windows-8-development-styling-xaml-3.png)