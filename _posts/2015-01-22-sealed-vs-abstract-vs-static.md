---
layout: post
title: "Sealed vs Abstract vs Static"
description: ""
category: csharp
tags: [c#, sealed, abstract, static]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

Here's a small table that shows the difference between abstract, sealed and static classes. See the example below. More info can be found [here](http://stackoverflow.com/questions/16217313/static-vs-sealed-class-difference).

{% highlight csharp linenos %}
/*
+-------------------------+--------+--------+--------+----------+
|       Class Type        | normal | static | sealed | abstract |
+-------------------------+--------+--------+--------+----------+
| Can be instantiated     | yes    | no     | yes    | no       |
| Can be inherited        | yes    | no     | no     | yes      |
| Can inherit from others | yes    | no     | yes    | yes      |
+-------------------------+--------+--------+--------+----------+
 */
{% endhighlight %}