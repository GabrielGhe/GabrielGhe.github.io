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
6.  [Bit Manipulation](#bit-manipulation)
7.  [Combinations and Permutations](#combinations-and-permutations)
8.  [Files](#files)
9.  [Regex](#regex)
10. [Formatting](#formatting)
11. [Dictionary](#Dictionary)
12. [HashSet](#hashset)
13. [List](#List)


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

string.Join("", char[] a)         // convert char[] to string
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


<!-- 
#########################################
#
#       Tree
#
#########################################
-->
<br /><br /><br />
<h3><a name="tree"></a><a href="">3. Tree</a></h3>
<p>The tree class here is for the binary tree</p>

<!-- Code -->
{% highlight csharp linenos %}
class TreeNode {
  int value;
  TreeNode parent;
  TreeNode left;
  TreeNode right;
}
{% endhighlight %}
<!-- /Code -->

1. Binary Search Tree: for all nodes, left children <= current node <= right children
2. Balanced vs. Unbalanced: In a balanced tree, the depth of the sibling tree's can differ max by 1
3. Full Binary Tree: every node other than the leaves has two children.
4. Perfect Binary Tree: a full binary tree + all leaves same depth + parents have 2 children
5. Complete Binary Tree: a binary tree with only last lvl possibly incomplete. We add to lowest lvl and right most



<!-- 
#########################################
#
#       Graph
#
#########################################
-->
<br /><br /><br />
<h3><a name="graph"></a><a href="">4. Graph</a></h3>

Graphs are used for many things, such as Networking and games.The 2 most famous algorithms for graphs are Depth First Search and Breath First Search

GraphNode

<!-- Code -->
{% highlight csharp linenos %}
class GraphNode{ 
  int val;
  GraphNode next;
  GraphNode[] neighbors;
  boolean visited;
 
  /**
   *  Constructor with value
   */
  GraphNode(int x) {
    val = x;
  }
  
  /**
   *  Constructor with value
   *  and with neightbors
   */
  GraphNode(int x, GraphNode[] n){
    val = x;
    neighbors = n;
  }
 
  /**
   *  ToString method
   */
  public override string ToString(){
    return "value: "+ this.val; 
  }
}
{% endhighlight %}

<!-- /Code -->

Breath First Search (live implementation from MIT [here](http://www.youtube.com/watch?v=s-CYnVz-uh4&t=2055))


{% highlight csharp linenos %}
public static Node bfs(Node root, int value) {
  // Queue is abstract, use an implementation of queue
  Queue<Node> q = new Queue<Node>();
  Node returnValue;
  q.Enqueue(root);
  
  while (q.Length > 0) {
    Node temp = q.Dequeue();
    if (temp.value == value) {
      returnValue = temp;
      break;
    }
    foreach (Node adj in temp.adjecent) {
      q.Enqueue(adj);
    }
  }
  return returnValue;
}
{% endhighlight %}

Depth First Search (live implementation from MIT [here](http://www.youtube.com/watch?v=AfSk24UTFS8&t=250))
  
<!-- Code -->
{% highlight csharp linenos %}
public static Node dfs(Node root, int value) {
  Stack<Node> s = new Stack<Node>();
  Node returnValue;
  s.Push(root);
  
  while (q.Length > 0) {
    Node temp = s.Pop();
    if (temp.value == value) {
      returnValue = temp;
      break;
    }
    foreach (Node adj in temp.adjecent) {
      s.Push(adj);
    }
  }
  return returnValue;
}
{% endhighlight %}
<!-- /Code -->


<!-- 
#########################################
#
#       SORTING
#
#########################################
-->
<br /><br /><br />
<h3><a name="sorting"></a><a href="">5. Sorting</a></h3>

Here is a table of comparison sorting algorithms and their time complexity

| Algorithm                 | Average Time | Worst Time | Space                  | Comments                |
|---------------------------|--------------|------------|------------------------|-------------------------|
| Bubble sort               | n^2          | n^2        | 1                      | It's easy to implement  |
| Insertion sort            | m^2          | n^2        |                        |                         |
| Selection sort            | n^2          | n^2        |                        |                         |
| Heap sort                 | nlogn        | nlogn      |                        |                         |
| Merge sort                | nlogn        | nlogn      | a lot                  |                         |
| Quick sort                | nlogn        | n^2        |                        | In practice, is fastest |


Here is a table of algorithms that do not use comparison

| Algorithm   | Average Time | Worst Time | Space | Comments                                   |
|-------------|--------------|------------|-------|--------------------------------------------|
| Bucket sort | n            | n + N      |       | n is the range of keys, N is size of array |
| Radix sort  | n            | m(n + N)   |       | m is the number of keys                    |



<!-- 
#########################################
#
#     Bit Manipulation
#
#########################################
-->
<br /><br /><br />
<h3><a name="bit-manipulation"></a><a href="">6. Bit Manipulation</a></h3>
<p>Bit operators</p>

| Operation name | C# symbol | Example | Result | Explanation                           |
|----------------|-------------|---------|--------|---------------------------------------|
| AND            | &           | 7 & 5   | 5      | 111 & 101 = 101                       |
| OR             | \|          | 8 \| 3  | 11     | 1000 \| 0011 = 1011                   |
| XOR            | ^           | 15 ^ 5  | 10     | 1111 ^ 0101 = 1010                    |
| Right Shift    | >>          | 7 >> 1  | 3      | 111 >> 1 = 011                        |
| Not            | ~           | ~0      | -1     | ~000 = 111 which is 2's complement -1 |



<!-- 
#########################################
#
#     Combinations and Permutations
#
#########################################
-->
<br /><br /><br />
<h3><a name="combinations-and-permutations"></a><a href="">7. Combinations and Permutations</a></h3>

1. If the order doesn't matter, it is a Combination... 1234 same as 4321
2. If the order matters, it is a Permutation... 1234 != 2134

Permutation

<!-- Code -->
{% highlight csharp linenos %}
public static void Perm(int[] list, int pos){
  if (pos == list.Length)
  {
    Console.WriteLine( string.Join("", list));
  }
  else
  {
    for(int i=pos; i < list.Length; ++i){
      Swap(list, i, pos);
      Perm(list, pos + 1);
      Swap(list, i, pos);
    }
  }
}

public static void Swap<T>(T[] a, int i, int j)
{
    T t = a[i];
    a[i] = a[j];
    a[j] = t;
}
{% endhighlight %}
<!-- /Code -->



<!-- 
#########################################
#
#     Files
#
#########################################
-->
<br /><br /><br />
<h3><a name="files"></a><a href="">11. Files</a></h3>

Writing to a file.

<!-- Code -->
{% highlight csharp linenos %}
//Append
using (StreamWriter w = File.AppendText(@"C:\path\to\myText.txt"))
{
  w.WriteLine("hello");
}

string[] lines = { "First line", "Second line", "Third line" };
File.WriteAllLines(@"C:\Users\Public\TestFolder\WriteLines.txt", lines);
{% endhighlight %}
<!-- /Code -->

Reading from a file

<!-- Code -->
{% highlight java linenos %}
//read all the lines in a file
string[] lines = File.ReadAllLines("path/to/myText.txt");
{% endhighlight %}
<!-- /Code -->
