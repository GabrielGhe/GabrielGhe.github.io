---
layout: post
title: "Windows 8 development: Managing States"
description: ""
category: csharp
tags: [c#, windows, windows phone, state]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

A mobile app should aways keep track of the state. This means that if you write a message or complete a level it should be saved. The next time you go to that app, you should restart from where you left off. This feature is very easy to implement on the Windows Phone. More information can be found [here](https://www.youtube.com/watch?v=qH4X8RKOZLc).

<!-- Frame State -->
<h3>Frame State</h3>

There are 2 very important methods to know about: `OnLaunched` and `OnSuspending`. We need to use `SuspensionManager` to save everything. If you used a `BlankPage`, you won't have the `SuspensionManager`. Just create a `BasicPage` and it will prompt you to automatically create the some helped classes (including the `SuspensionManager`) for you.

Inside `OnLaunched`, we will add the following line of code.

{% highlight csharp linenos %}
ManagingState.Common.SuspensionManager.RegisterFrame(appFrame, "appFrame");
{% endhighlight %}

![Results]({{ ASSET_PATH }}images/2015-01-12-windows-8-development-managing-states-1.png)

<br /><br /><br />

In `OnSuspending`, we have to save the state.

{% highlight csharp linenos %}
// make sure you add async to the method signature
await ManagingState.Common.SuspensionManager.SaveAsync();
{% endhighlight %}

![Results]({{ ASSET_PATH }}images/2015-01-12-windows-8-development-managing-states-2.png)

<br /><br /><br />

We also need to restore our state, we do this again in `OnLaunched`. A bit lower than the code we wrote to register the frame, we will check if the app was terminated and restore the state if it was.

{% highlight csharp linenos %}
// make sure you add async to the method signature again
await ManagingState.Common.SuspensionManager.RestoreAsync();
{% endhighlight %}

![Results]({{ ASSET_PATH }}images/2015-01-12-windows-8-development-managing-states-3.png)

<br /><br /><br />

<!-- Application State -->
<h3>Application State</h3>

Above we saved what Frame or Page the user was on, but what if we want to store specific information that the user has entered? To accomplish this, we will use the local storage.

Save the state.

{% highlight csharp linenos %}
Windows.Storage.ApplicationDataContainer localStorage = Windows.Storage.ApplicationData.Current.LocalSettings;
localStorage.Values["someKey"] = "I'm saving this text for later";
{% endhighlight %}

Restore the state in `NavigationHelper_LoadState` (it will be there if you chose `BasicPage`).

{% highlight csharp linenos %}
// Again we get the storage
Windows.Storage.ApplicationDataContainer localStorage = Windows.Storage.ApplicationData.Current.LocalSettings;

if ( localStorage.Values.ContainsKey("someKey") ) {
  myLocalVariable = localStorage.Values["someKey"].toString();
}
{% endhighlight %}

<br /><br /><br />

The other way to save Application state (which is much easier) is with `NavigationHelper_SaveState` and `NavigationHelper_LoadState`.

Save State.
{% highlight csharp linenos %}
e.PageState["someKey"] = "I'm saving this text for later";
{% endhighlight %}

![Results]({{ ASSET_PATH }}images/2015-01-12-windows-8-development-managing-states-5.png)

Load State.
{% highlight csharp linenos %}
if ( e.PageState != null && e.PageState.ContainsKey("someKey") ) {
  myLocalVariable = e.PageState["someKey"].toString();
}
{% endhighlight %}
![Results]({{ ASSET_PATH }}images/2015-01-12-windows-8-development-managing-states-4.png)


