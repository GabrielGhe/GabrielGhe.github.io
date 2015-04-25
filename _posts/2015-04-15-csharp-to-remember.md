---
layout: post
title: "C# To Remember"
description: ""
category: csharp
tags: [string, tree, graph, sorting, bit manipulation, regex, dictionary, file, list, hashset]
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
10. [Dictionary](#dictionary)
11. [HashSet](#hashset)
12. [List](#list)
13. [Stack](#stack)
14. [Queue](#queue)
15. [Random](#random)


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
new int[]{1,2,3,4,5}.Length       // array's size (not how to initialize array)
list.Count                        // List's size

Char.IsLetter('a')                // true
Char.IsDigit(5)                   // true
Char.IsLetterOrDigit('a')         // true
Char.IsWhiteSpace(' ')            // true

Char.ToLower('A')                 // 'a'
Char.IsUpper('a')                 // false

Convert.ToString(23, 2)           // "10111"

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
   *  Method that returns top node
   *  without removing it
   */
  public Node Peek(){
    if(top != null){
      return new Node(top.value);
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
      Node temp = top;
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
      Node temp = first;
      first = first.next;
      if (first == null) {
          tail = null;
      }
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
| Insertion sort            | n^2          | n^2        |                        |                         |
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
<h3><a name="files"></a><a href="">8. Files</a></h3>

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



<!-- 
#########################################
#
#     Regex
#
#########################################
-->
<br /><br /><br />
<h3><a name="regex"></a><a href="">9. Regex</a></h3>

The full documentation can be found here [Docs](https://msdn.microsoft.com/en-us/library/az24scfc(v=vs.110).aspx)

<!-- Code -->
{% highlight csharp linenos %}
string pattern = "a*b";

//Replace
Regex.Replace("gaaaabcde", pattern, String.Empty); // gcde

foreach (Match match in Regex.Matches(input, pattern, RegexOptions.IgnoreCase))
         Console.WriteLine("{0} (duplicates '{1}') at position {2}", 
                           match.Value, match.Groups[1].Value, match.Index);
{% endhighlight %}
<!-- /Code -->


<!-- 
#########################################
#
#     Dictionary
#
#########################################
-->
<br /><br /><br />
<h3><a name="dictionary"></a><a href="">10. Dictionary</a></h3>

Dictionaries allow inserts, deletes and gets at O(1).

<!-- Code -->
{% highlight csharp linenos %}
// var table = new Dictionary<string, int>{ {"a",1}, {"b",2}, {"c",3}};
Dictionary<string, int> dict = new Dictionary<string, int>();
dict["a"] = 1;    // { a:1 }
dict["b"] = 2;    // { a:1, b:2 }
dict["c"] = 3;    // { a:1, b:2, c:3 }

// to go over keys or values, we first cache them in a List then
// we can go over them and modify them. If we simply iterate over
// myDictionary.Keys, we can't modify the dictionary

// ["a", "b", "c"]
List<string> keys = myDictionary.Keys;
foreach(var key in keys) {
    // do stuff with key
}

// [1, 2, 3]
List<int> values =  myDictionary.Values;
foreach(var value in values) {
  // do stuff with value
}

// KeyValuePair<string, int> item
foreach(var pair in myDictionary) {
  // do stuff with pair.Key
  // do stuff with pair.Value
}

int value;
dict.TryGetValue("a", out value);   // value = 1
dict.ContainsKey("d");              // false
dict.Remove("a");                   // { b:2, c:3 }
dict.Clear();                       // {}
{% endhighlight %}
<!-- /Code -->


<!-- 
#########################################
#
#     HashSet
#
#########################################
-->
<br /><br /><br />
<h3><a name="hashset"></a><a href="">11. HashSet</a></h3>

A HashSet is a dictionary that only stores keys. It doesn't allow for duplicates and only stores keys.

<!-- Code _______________________________________-->
{% highlight csharp linenos %}
// var nums = new HashSet<int>{1, 2, 3};
HashSet<int> nums = new HashSet<int>();
nums.Add(1);       // { 1 }
nums.Add(2);       // { 1, 2 }
nums.Add(3);       // { 1, 2, 3 }

nums.Contains(5);  // false
nums.Contains(2);  // true
nums.Remove(2);    // { 1, 3 }

foreach(int val in nums) {
    Console.WriteLine("{0} ", val);
}
// 1
// 3

nums.RemoveWhere(s => s % 2 == 1); // remove odd

int[] array = nums.ToArray();   // [1,3]
List<int> list = hset.ToList(); // [1,3]

set.Clear();                    // {}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


<!-- 
#########################################
#
#     List
#
#########################################
-->
<br /><br /><br />
<h3><a name="list"></a><a href="">12. List</a></h3>


The List is a very widely used datastructure in C#. It can insert, add, remove, binary search etc.

<!-- Code _______________________________________-->
{% highlight csharp linenos %}
// var lst = new List<int>{1, 2, 3, 4, 5};
List<int> lst = new List<int>();
lst.Add(1);       // [1]
lst.Add(2);       // [1, 2]
lst.Add(3);       // [1, 2, 3]
lst.Add(4);       // [1, 2, 3, 4]
lst.Add(5);       // [1, 2, 3, 4, 5]

lst.AddRange(new int[]{-1});
// [1, 2, 3, 4, 5, -1, -2]

lst.Insert(0, 9); // [9, 1, 2, 3, 4, 5, -1]
lst.InsertRange(0, new int[]{7, 9}); // [7, 8, 9, 1, 2, 3, 4, 5, -1]

lst.RemoveAt(lst.Count-1);    // [7, 8, 9, 1, 2, 3, 4, 5]
lst.RemoveRange(0, 3);        // [1, 2, 3, 4, 5]
// RemoveRange(int index, int count)

lst.Reverse();                // [5, 4, 3, 2, 1]
lst.Sort();                   // [1, 2, 3, 4, 5]

int idx = lst.BinarySearch(6);// -6
if (idx < 0)                  // ~(-6) = 5 the location to insert
  lst.Insert(~idx, 6);        // [1, 2, 3, 4, 5, 6]

List<string> lst2 = new List<string>{"Gab", "Vush", "Daisy", "Honey"};
lst2 = lst2.OrderBy( x => x.Length).Reverse().ToList();
// ["Honey", "Daisy", "Vush", "Gab"]

int[] array = lst.ToArray();  // [1, 2, 3, 4, 5, 6]
Dictionary<int,int> dict = lst.ToDictionary(item => item, item => 0);
// { 1:0, 2:0, 3:0, 4:0, 5:0, 6:0 }

// Enumerable.Range(int start, int count)
foreach(var i in Enumerable.Range(0, lst.Count)) {
    // i is the index
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


<!-- 
#########################################
#
#     Stack
#
#########################################
-->
<br /><br /><br />
<h3><a name="stack"></a><a href="">13. Stack</a></h3>

A stack is a FILO (first in, last out) data structure. You add to the back and remove from the back.

<!-- Code _______________________________________-->
{% highlight csharp linenos %}
Stack<Tuple<string,int>> s = new Stack<Tuple<string,int>>();
s.Push(Tuple.Create("One",1));    // [("One",1)]
s.Push(Tuple.Create("Two", 2));   // [("One",1), ("Two",2)]
s.Push(Tuple.Create("Three", 3)); // [("One",1), ("Two",2), ("Three",3)]

var t = s.Pop();        // ("Three",3) s = [("One",1), ("Two",2)]
s.Peek();               // ("Two",2)   s = [("One",1), ("Two",2)]

s.Count                 // 2

t.Item1                 // "Three"
t.Item2                 // 3
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


<!-- 
#########################################
#
#     Queue
#
#########################################
-->
<br /><br /><br />
<h3><a name="queue"></a><a href="">14. Queue</a></h3>

A queue is a FIFO (first in, first out) data structure. You add to the back and remove from the front.

<!-- Code _______________________________________-->
{% highlight csharp linenos %}
Queue<double> q = new Queue<double>();
q.Enqueue(1.1);       // [1.1]
q.Enqueue(2.2);       // [1.1, 2.2]
q.Enqueue(3.3);       // [1.1, 2.2, 3.3]

q.Dequeue();          // 1.1   q = [2.2, 3.3]
q.Peek();             // 2.2   q = [2.2, 3.3]

q.Count               // 2
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


<!-- 
#########################################
#
#     Random
#
#########################################
-->
<br /><br /><br />
<h3><a name="random"></a><a href="">15. Random</a></h3>

<!-- Code _______________________________________-->
{% highlight csharp linenos %}
Random r = new Random();
r.Next();           // non negative random number
r.Next(5);          // [0, 5[
r.Next(0, 10);      // [0, 10[
r.NextDouble();     // [0.0, 1.0[
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->
