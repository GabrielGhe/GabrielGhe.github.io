---
layout: post
title: "C++ to C# Callback"
description: ""
category: cplusplus
tags: [csharp, cpp, callback, export]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

Sometimes you need/have to use C++ together with C#. Normally you would create a class in C++ and export it as a dll which you would use in C#.
Other times you would want to execute some C# code when something happens in C++. This post will go step by step showing you how to pass in a C# callback to C++ to be executed.
You can get more information about how to accomplish this task [here](http://www.codeproject.com/Tips/318140/How-to-make-a-callback-to-Csharp-from-C-Cplusplus).

<!-- Content -->
<h3>Content</h3>

In C#, declare a delegate which takes in 2 ints and returns nothing

<!-- Code _______________________________________-->
{% highlight csharp linenos %}
[UnmanagedFunctionPointer(CallingConvention.StdCall)]
delegate void YourCallback(int, int);
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

In your C++ code, also define the same signature for the callback.

<!-- Code _______________________________________-->
{% highlight csharp linenos %}
// YourCallback is now a function that takes in an int and returns void
typedef void (__stdcall * YourCallback)(int);
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

We're going to make a function in C++ which takes in our C# callback and executes it.

<!-- Code _______________________________________-->
{% highlight csharp linenos %}
// this says that it will be exported
#define DLL __declspec(dllexport)
DLL void TakesInCallbackAndDoesStuff(YourCallback yourCallback) {
  // stuff
}

/*
This is another way, just declaring that it will be exported in the signature
extern "C" __declspec(dllexport) void __stdcall TakesInCallbackAndDoesStuff(YourCallback yourCallback) {
  // stuff
}
*/
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

Now that we have the function in C++ that will do stuff and execute our callback when it's done, we have to make a callback in C#.

<!-- Code _______________________________________-->
{% highlight csharp linenos %}
YourCallback callback =
    (intParameter) =>
    {
        Console.WriteLine("The result of the C++ function is = {0}", intParameter);
    };
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

All that's left is to send our callback to the C++ function from our C# code.

<!-- Code _______________________________________-->
{% highlight csharp linenos %}
TakesInCallbackAndDoesStuff(callback);
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->
