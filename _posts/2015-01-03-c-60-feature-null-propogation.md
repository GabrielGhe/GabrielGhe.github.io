---
layout: post
title: "6.0 feature: Null Propogation"
description: "C# 6.0 has some interesting new features. The feature discussed in this post is null propogation.
Null propogation allows you to check if a property exists and if it does, execute code.
More information can be found [here](http://www.volatileread.com/Wiki/Index?id=1075)."
category: csharp
tags: [c#, null propogation]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

C# 6.0 has some interesting new features. The feature discussed in this post is null propogation.
Null propogation allows you to check if a property exists and if it does, execute code.
More information can be found [here](http://www.volatileread.com/Wiki/Index?id=1075).

<!-- Details -->
<h3>Details</h3>

Using the `?` symbol, we can see if the preceding variable holds a null. If it does, the chain stops and the value returned is null.

{% highlight csharp linenos %}
// Before
if (obj != null && obj.children != null) {
  obj.children.Add( new Child() );
}

// In 6.0
if (obj?.children != null) {
  obj.children.Add( new Child() );
}

// 1. Is obj == null? If yes, stop and the chain == null
// 2. Is children == null? If yes, stop and the chain == null
{% endhighlight %}
