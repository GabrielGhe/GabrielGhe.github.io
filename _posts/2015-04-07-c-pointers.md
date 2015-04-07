---
layout: post
title: "C++: Pointers"
description: ""
category: cplusplus
tags: [cpp, pointers]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

In C++, pointers are extremely important. This is only a brief overview of pointers. You can find more information about pointers [here](http://www.cplusplus.com/doc/tutorial/pointers/).

<!-- Content -->
<h3>Content</h3>

<!-- Code _______________________________________-->
{% highlight c++ linenos %}
// pointerToA points to A's memory address
int* pointerToA = &A;
Person* pointerToP = &P;

// to access `A`'s content, you dereference the pointer
*pointerToA = 5; // now A = *pointerToA = 5

// to access `P`'s methods, you can use the -> notation or (*P)
(*pointerToP).pMethod();
pointerToP->pMethod();

{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->
