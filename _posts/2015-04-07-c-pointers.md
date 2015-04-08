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

There are several types of pointers now in C++11 that you should at least know exist.

1. `Person* normalPointer` : normal pointer
2. `std::shared_ptr<Person> sharedPointer` : reference counted smart pointer.
3. `std::weak_ptr<Person> weakPointer` : lets you look at a shared_ptr without incrementing the ref count.
4. `std::unique_ptr<Person> uniquePointer` : is unique, have to use std::move to change variable.

<!-- Normal Pointer -->
<h4>Normal Pointer</h4>

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


<!-- Shared Pointer in C++11 -->
<h3>Shared Pointer in C++11</h3>

<!-- Code _______________________________________-->
{% highlight c++ linenos %}
// uses reference counting
#include <memory>
std::shared_ptr<Person> sharedPointerToPerson;

// increment the resource count by creating
sharedPointerToPerson = std::make_shared<Person>();

// decrement reference count
sharedPointerToPerson.reset();
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


