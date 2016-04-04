---
layout: post
title: "Guard Statement"
description: "
The new `guard` keyword allows us to solve one of the most important parts of coding: preconditions. Its addition to the Swift language was welcomed with open arms. I'll explain how it works in this post and you'll quickly understand why it's so great. 
"
category: swift 
tags: [ios, apple, guard, preconditions]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

{{ page.description }}

<!-- Content -->
<h3>Content</h3>

If you have a method that takes in an Optional (could be null), you would make sure that it's a valid parameter at the beginning of the method.

<!-- Code _______________________________________-->
{% highlight swift linenos=table %}
func doSomething(anInt: Int?) {
  if anInt == nil || anInt! > 50 {
    // anInt is not valid, don't go further
    return;
  }

  // anInt is good, continue with the method
  anInt!.description
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->




This is ok, but Swift has the `let` keyword that unwraps the Optional.

<!-- Code _______________________________________-->
{% highlight swift linenos=table %}
func doSomething(anInt: Int?) {
  if let anInt = anInt where anInt > 50 {
    // anInt is good, continue with the method
    anInt.description
  }

  // anInt is not valid, don't go further
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->




This is a problem, because now we have the possibility of creating a [pyramid of doom](https://en.wikipedia.org/wiki/Pyramid_of_doom_(programming)). So, the `guard` keyword was introduced.

<!-- Code _______________________________________-->
{% highlight swift linenos=table %}
func doSomething(anInt: Int?) {
  guard if let anInt = anInt where anInt > 50 else {
    // anInt is not valid, don't go further
    return;
  }

  // anInt is good, continue with the method
  anInt.description  
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->