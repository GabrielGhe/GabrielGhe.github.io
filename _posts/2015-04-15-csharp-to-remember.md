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



<!-- 
#########################################
#
# Linked list
#
#########################################
-->
<br /><br /><br />
<h3><a name="linked-list"></a><a href="">2. Linked List</a></h3>

The node class which is the "element" of a linked list

<!-- Code -->
{% highlight csharp linenos %}
public class Node {
  public int val;
  public Node next;
  
  public Node(int x) {
    val = x;      //value
    next = null;  //next element
  }
}
{% endhighlight %}
<!-- /Code -->

Stack implementation using the Linked List data structure

<!-- Code -->
{% highlight csharp linenos %}
public class Stack{
  public Node top; 
  
  /**
   *  Default constructor
   */
  public Stack(){}    
  

  /**
   *  Method that returns top node
   *  without removing it
   */
  public Node Peek(){
    if(top != null){
      return top;
    }
    return null;
  }
  
  /**
   *  Method used to remove and
   *  return top node
   */
  public Node Pop(){
    if(top == null){
      return null;
    } else {
      Node temp = new Node(top.val);
      top = top.next;
      return temp;  
    }
  }
  
  /** 
   *  Method to add Node
   *  to the top of the Stack
   */
  public void Push(Node n){
    if(n != null){
      n.next = top;
      top = n;
    }
  }
}
{% endhighlight %}

<!-- /Code -->

Queue implementation using the Linked List data structure

<!-- Code -->
{% highlight csharp linenos %}
public class Queue {
  public Node first;
  public Node last;
  
  /**
   *  Push an element to the back
   *  of the queue
   */
  public void Enqueue(Node n){
    if(first == null){
      first = n;
      last = first;
    } else {
      last.next = n;
      last = n;
    }
  }
 
  /**
   *  Remove element at the front
   */
  public Node Dequeue(){
    if(first == null){
      return null;
    } else {
      Node temp = new Node(first.val);
      first = first.next;
      return temp;
    } 
  }
}
{% endhighlight %}

<!-- /Code -->
