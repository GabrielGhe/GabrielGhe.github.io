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
<br /><br /><br />
<h3><a name="string"></a><a href="">1. String</a></h3>

<!-- Code -->
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
<!-- /Code -->

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
<!-- /Code -->

Stack implementation using the Linked List data structure

<!-- Code -->
{% highlight java linenos %}
class Stack{
  Node top; 
  
  /**
   *  Default constructor
   */
  public Stack(){}    
  

  /**
   *  Method that returns top node
   *  without removing it
   */
  public Node peek(){
    if(top != null){
      return top;
    }
    return null;
  }
  
  /**
   *  Method used to remove and
   *  return top node
   */
  public Node pop(){
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
  public void push(Node n){
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
{% highlight java linenos %}
class Queue {
  Node first, last;
  
  /**
   *  Push an element to the back
   *  of the queue
   */
  public void enqueue(Node n){
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
  public Node dequeue(){
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
{% highlight java linenos %}
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

Graphs are use for many things, such as Netorking and games for example.The 2 most famous algorithms for graphs are Depth First Search and Breath First Search

GraphNode

<!-- Code -->
{% highlight java linenos %}
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
   *  toString method
   */
  public String toString(){
    return "value: "+ this.val; 
  }
}
{% endhighlight %}

<!-- /Code -->

Breath First Search (live implementation from MIT [here](http://www.youtube.com/watch?v=s-CYnVz-uh4&t=2055))


{% highlight java linenos %}
public static Node bfs(Node root, int value) {
  // Queue is abstract, use an implementation of queue
  Queue<Node> q = new Queue<Node>();
  Node returnValue;
  q.enqueue(root);
  
  while (!q.isEmpty()) {
    Node temp = q.dequeue();
    if (temp.value == value) {
      returnValue = temp;
      break;
    }
    for (Node adj : temp.adjecent) {
      q.enqueue(adj);
    }
  }
  return returnValue;
}
{% endhighlight %}

Depth First Search (live implementation from MIT [here](http://www.youtube.com/watch?v=AfSk24UTFS8&t=250))
  
<!-- Code -->
{% highlight java linenos %}
public static Node dfs(Node root, int value) {
  Stack<Node> s = new Stack<Node>();
  Node returnValue;
  s.push(root);
  
  while (!q.isEmpty()) {
    Node temp = s.pop();
    if (temp.value == value) {
      returnValue = temp;
      break;
    }
    for (Node adj : temp.adjecent) {
      s.push(adj);
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
#   Recursion and Iteration
#
#########################################
-->
<br /><br /><br />
<h3><a name="recursion-and-iteration"></a><a href="">6. Recursion and Iteration</a></h3>
<p>Recursion is easy to understand and implement. However, it's worse than iteration and can cause stackoverflows</p>

Fibonacci using bad recursion

<!-- Code -->
{% highlight java linenos %}
public static int fib(int n){
  if(n <= 1)
    return n;         //base case
  else
    return fib(n-1) + fib(n-2); //recursive case
}
{% endhighlight %}
<!-- /Code -->

Fibonacci using tail recursion

<!-- Code -->
{% highlight java linenos %}
public static int fibHelper(int start, int end, int prev, int current){
  if(start == end)
    return current;
  else
    return fibHelper(++start, end, current, current + prev);
}

public static int fib(int n){
  if(n <= 1)
    return n;
  else 
    return fibHelper(1,n,0,1);
}
{% endhighlight %}
<!-- /Code -->

Fibonacci using iteration

<!-- Code -->
{% highlight java linenos %}
public static int fib(int n) {
  if (n <= 1){
    return n;
  }
  int current = 1;
  int prev = 0;
  int temp = 0;
 
  for (int i = 2; i <= n; i++) {
    temp = current + prev;  //compute fib at pos n
    prev = current;     //old current is now prev
    current = temp;     //current is temp
  }
  return current;
}
{% endhighlight %}
<!-- /Code -->


<!-- 
#########################################
#
#   DYNAMIC PROGRAMMING
#
#########################################
-->
<br /><br /><br />
<h3><a name="dynamic-programming"></a><a href="">7. Dynamic programming</a></h3>

Dynamic programming is a technique for solving problems with the following properties:

1. An instance is solved using the solutions for smaller instances.
2. The solution for a smaller instance might be needed multiple times.
3. The solutions to smaller instances are stored in a table, so that each smaller instance is solved only once.
4. Additional space is used to save time.

The problem of climbing steps perfectly fit those 4 properties. Therefore, it can be solve by using dynamic programming.

<!-- Code -->
{% highlight java linenos %}
public static int[] Steps = new int[100];
 
public static int f3(int n) {
  if (n <= 2)
    A[n]= n;
 
  if (A[n] > 0)
      return A[n];
  else
      A[n] = f3(n-1) + f3(n-2); //store results so only calculate once!
  return A[n];
}
{% endhighlight %}
<!-- /Code -->


<!-- 
#########################################
#
#     Bit Manipulation
#
#########################################
-->
<br /><br /><br />
<h3><a name="bit-manipulation"></a><a href="">8. Bit Manipulation</a></h3>
<p>Bit operators</p>

| Operation name | Java symbol | Example | Result | Explanation                           |
|----------------|-------------|---------|--------|---------------------------------------|
| AND            | &           | 7 & 5   | 5      | 111 & 101 = 101                       |
| OR             | \|          | 8 \| 3  | 11     | 1000 \| 0011 = 1011                   |
| XOR            | ^           | 15 ^ 5  | 10     | 1111 ^ 0101 = 1010                    |
| Right Shift    | >>          | 7 >> 1  | 3      | 111 >> 1 = 011                        |
| Not            | ~           | ~0      | -1     | ~000 = 111 which is 2's complement -1 |

<!-- 
#########################################
#
#     Probability
#
#########################################
-->
<br /><br /><br />
<h3><a name="probability"></a><a href="">9. Probability</a></h3>

There are 50 people in a room, what’s the probability that two people have the same birthday? (Ignoring the fact of leap year, i.e., 365 day every year)

<!-- Code -->
{% highlight java linenos %}
public static double caculateProbability(int n){
  double x = 1; 
 
  for (int i=0; i<n; i++) {
    x *=  (365.0-i)/365.0;
  }
 
  double pro = Math.round((1-x) * 100);
  return pro/100;
}
{% endhighlight %}
<!-- /Code -->

<!-- 
#########################################
#
#     Combinations and Permutations
#
#########################################
-->
<br /><br /><br />
<h3><a name="combinations-and-permutations"></a><a href="">10. Combinations and Permutations</a></h3>

1. If the order doesn't matter, it is a Combination... 1234 same as 4321
2. If the order matters, it is a Permutation... 1234 != 2134

Permutation

<!-- Code -->
{% highlight java linenos %}
public static void perm(int[] list, int pos){
  if (pos == list.length) {
    System.out.println( Arrays.toString(list) );
  } else {
    for(int i=pos; i < list.length; ++i){
      swap(list, i, pos);
      perm(list, pos + 1);
      swap(list, i, pos);
    }
  }
}

public static final <T> void swap (T[] a, int i, int j) {
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
{% highlight java linenos %}
//java7... appends to file
try(Formatter f = new Formatter("myText.txt")) {
  f.format("this is output text", null);
} catch(IOException ioe){
  ioe.printStackTrace();
}

//older java
Formatter f;
try {
  f = new Formatter("myText.txt");
  f.format("this is output text", null);
} catch(IOException ioe){
  ioe.printStackTrace();
} finally {
  f.close();
}
{% endhighlight %}
<!-- /Code -->

Reading from a file

<!-- Code -->
{% highlight java linenos %}
//read all the lines in a file
try(Scanner scan = new Scanner(new File("myText.txt") ) ){
  ArrayList<String> x = new ArrayList<String>();
  while(scan.hasNext()){
    x.add(scan.nextLine());
  }
} catch (FileNotFoundException e) {
  e.printStackTrace();
}
{% endhighlight %}
<!-- /Code -->