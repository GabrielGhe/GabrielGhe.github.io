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
