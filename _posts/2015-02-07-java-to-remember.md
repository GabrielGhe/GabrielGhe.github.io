---
layout: post
title: "Java To Remember"
description: ""
category: java
tags: [string, tree, graph, sorting, bit manipulation, regex, hashmap, socket, file]
---
{% include JB/setup %}

<!-- Overview -->
<h3><a name="table-of-content"></a>Overview</h3>

This post is a little different. I'm going to be turning my JavaToRemember Repo into a post so that it's easier to search. You can find more information [here](http://github.com/GabrielGhe/JavaToRemember).

Credits to source article here... <a>http://www.programcreek.com/2012/11/top-10-algorithms-for-coding-interview/</a>

### Table of content ###
1.  [String](#string)
2.  [Linked List](#linked-list)
3.  [Tree](#tree)
4.  [Graph](#graph)
5.  [Sorting](#sorting)
6.  [Recursion and iteration](#recursion-and-iteration)
7.  [Dynamic Programming](#dynamic-programming)
8.  [Bit Manipulation](#bit-manipulation)
9.  [Probability](#probability)
10. [Combinations and Permutations](#combinations-and-permutations)
11. [Files](#files)
12. [Sockets](#sockets)
13. [Regex](#regex)
14. [Formatting](#formatting)
15. [HashMap](#hashmap)

<!-- 
#########################################
#
#   String
#
#########################################
-->
<h3><a name="string"></a><a href="">1. String</a></h3>
{% highlight java linenos %}
"Hello".toCharArray()             // ['H', 'e', 'l', 'l', 'o']
Collections.sort(List lst)        // sorts a List in place
Arrays.sort(T[] array)            // sort an array
Collections.reverse(List lst)     // reverses a LIST
Arrays.toString(char[] a)         // convert to string
"Hello".charAt(int x)             // get a char at the specific index
"Hello".length()                  // string length
[1,2,3,4,5].length                // array size
{% endhighlight %}


<!-- 
#########################################
#
# Linked list
#
#########################################
-->
<h3><a name="linked-list"></a><a href="">2. Linked List</a></h3>

The node class which is the "element" of a linked list

{% highlight java linenos %}
class Node {
  int val;
  Node next;
  
  Node(int x) {
    val = x;      //value
    next = null;  //next element
  }
}
{% endhighlight %}