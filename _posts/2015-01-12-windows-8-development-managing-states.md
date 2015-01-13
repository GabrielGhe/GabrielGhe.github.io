---
layout: post
title: "Windows 8 development: Managing States"
description: ""
category: csharp
tags: [windows, windows phone, state]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

A mobile app should aways keep track of the state. This means that if you write a message or complete a level it should be saved. The next time you go to that app, you should restart from where you left off. This feature is very easy to implement on the Windows Phone. More information can be found [here](https://www.youtube.com/watch?v=qH4X8RKOZLc).

<!-- Details -->
<h3>Details</h3>

There are 2 very important methods to know about: `OnLaunched` and `OnSuspending`. We need to use `SuspensionManager` to save everything. If you used a `BlankPage`, you won't have the `SuspensionManager`. Just create a `BasicPage` and it will prompt you to automatically create the some helped classes (including the `SuspensionManager`) for you.

Inside `OnLaunched`, we will add the following line of code.

{% highlight csharp linenos %}
ManagingState.Common.SuspensionManager.RegisterFrame(appFrame, "appFrame");
{% endhighlight %}

![Results]({{ ASSET_PATH }}images/2015-01-12-windows-8-development-managing-states-1.png)

In `OnSuspending`, we have to save the state.

{% highlight csharp linenos %}
// make sure you add async to the method signature
await ManagingState.Common.SuspensionManager.SaveAsync();
{% endhighlight %}

![Results]({{ ASSET_PATH }}images/2015-01-12-windows-8-development-managing-states-2.png)