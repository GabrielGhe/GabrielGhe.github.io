---
layout: post
title: "C To Remember"
description: ""
category: c
tags: [c, memory allocation]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

C is used almost everywhere, enough said. This is a short overview of the language. To run a C file, you frist compile the file into an object file and then the linker links it to any other compiled file that it needs and creates an executable.

<!-- Content -->
<h3>Content</h3>

<!-- -->
<h4></h4>


<!-- Hello World -->
<h4>Hello World</h4>

<!-- Code _______________________________________-->
{% highlight c linenos %}
#include <stdio.h>

void hello()
{
    printf("hello world\n");
}

int main()
{
    hello();
    return 0;
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


<!-- Variables -->
<h4>Variables</h4>

<!-- Code _______________________________________-->
{% highlight c linenos %}
// only accessible to functions of the same file
static int s_i = 3;

// normal primitives
char myChar = 'a';
int i = 4;
float f = 2.3;

// missing types
typedef char bool;
#define true 1
#define false 0

// arrays
int values[5];
int values[] = { 1, 2, 3, 4, 5 };   // [1, 2, 3, 4, 5]
int values[5] = { 1, 2, 3 };        // [1, 2, 3, 0, 0]
values[0] = 6                       // [6, 2, 3, 4, 5]
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


<!-- Operators -->
<h4>Operators</h4>

<!-- Code _______________________________________-->
{% highlight c linenos %}
/* Precedence of Operators

Operator        Operation           Associativity
!~ ++ -- -      Unary                       <
* / %           Multiplicative          >
+ -             Additive                >
<< >>           Bitwise shift           >
< > <= >=       Relational              >
== !=           Equality                >
&               Bitwise AND             >
^               Bitwise XOR             >
|               Bitwise OR              >
&&              Logical AND             >
||              Logical OR              >
= *= /= %=      Assignment                  <
+= -= <<= >>=
^= |=       

*/
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


<!-- Pointers -->
<h4>Pointers</h4>

<!-- Code _______________________________________-->
{% highlight c linenos %}
/* INIT POINTER
p is a pointer to int and is initialized with address of apples
*/
int apples = 5;
int* p = &apples;       // p = apples' address

/* DEREFERENCE POINTER
- dereference p (get the value of the address that p is pointing at)
- add 6 to dereferenced p
- place result in oranges
*/
int oranges = *p + 6;   // oranges = 11

/* POINTER VALIDATION
you initialize the poitner to 0
which is null/nullptr and before you use
the pointer, check if it's valid with an if
*/
int* g = 0;
if (g)
{
    // g is not null, do stuff with g
}

/* ARRAYS AND POINTERS
*/
int values[] = { 0, 1, 2, 3, 4 };
int* ptr = values;          // pointing to first element (0)
int* last = &values[4];     // pointing to last (5)

++ptr;                      // pointing to second element (1)
ptr += 3;                   // pointing to last element (4)
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->
