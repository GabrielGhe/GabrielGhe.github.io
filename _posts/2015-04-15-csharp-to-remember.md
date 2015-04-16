---
layout: post
title: "C# To Remember"
description: ""
category: csharp
tags: [string, tree, graph, sorting, bit manipulation, regex, dictionary, socket, file, list]
---
{% include JB/setup %}

<!-- Overview -->
<h3><a name="table-of-content"></a>Overview</h3>

This is a similar post to my JavaToRemember post but for C#.


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
15. [Dictionary](#Dictionary)
16. [HashSet](#hashset)
17. [List](#List)


<!-- 
#########################################
#
#   String
#
#########################################
-->
<br /><br /><br />
<h3><a name="string"></a><a href="">1. String</a></h3>

<!-- Code _______________________________________-->
{% highlight csharp linenos %}
"Hello".ToCharArray()             // ['H', 'e', 'l', 'l', 'o']
lst.Sort()                        // sorts a List in place
Array.Sort<char>(array);          // sort an array
list.Reverse();                   // reverses a List in place

new string(char[] a)              // convert char[] to string
"Hello"[int x]                    // get a char at the specific index
"Hello".Length                    // string length
{1,2,3,4,5}.Length                // array's size (not how to initialize array)

Char.IsLetter('a')                // true
Char.IsDigit(5)                   // true
Char.IsLetterOrDigit('a')         // true
Char.IsWhiteSpace(' ')            // true

Char.ToLower('A')                 // 'a'
Char.IsUpper('a')                 // false

// Substring(int position, int length)
"abcdef".Substring(1, 1)          // "b"
"abcdef".Substring(1, 4)          // "bcde"
"abcdef".Substring(3)             // "def"
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->
