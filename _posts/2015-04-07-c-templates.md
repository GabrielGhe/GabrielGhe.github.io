---
layout: post
title: "C++: Templates"
description: ""
category: cplusplus
tags: [cpp, templates]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

In C++, generics are done using templates. Templates generate the required code at compile time instead of at runtime.
This improves performance significantly. You can find more information about templates [here](http://www.cprogramming.com/tutorial/templates.html).
Templates can only be in the header files.

<!-- Content -->
<h3>Content</h3>

<!-- Before -->
<h4>Before</h4>

<!-- Code _______________________________________-->
{% highlight c++ linenos %}
class calc
{
  public:
      int multiply(int x, int y);
      int add(int x, int y);
};

int calc::multiply(int x, int y)
{
    return x*y;
}
int calc::add(int x, int y)
{
    return x+y;
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


<!-- After -->
<h4>After</h4>

<!-- Code _______________________________________-->
{% highlight c++ linenos %}
template <typename T>
class calc
{
  public:
    T multiply(T x, T y);
    T add(T x, T y);
};

template <typename T>
T calc<T>::multiply(T x, T y)
{
  return x*y;
}

template <typename T>
T calc<T>::add(T x, T y)
{
  return x+y;
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


<!-- After Specialized -->
<h4>After Specialized</h4>

This code will be specific for integers.

<!-- Code _______________________________________-->
{% highlight c++ linenos %}
template <>
class calc<int>
{
  public:
    int multiply(int x, int y);
    int add(int x, int y);
}

template <>
int calc<int>::multiply(int x, int y)
{
  return x*y;
}

template <>
int calc<int>::add(int x, int y)
{
  return x+y;
}

{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->
