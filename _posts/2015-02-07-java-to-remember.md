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

This post is a little different. I'm going to be turning my JavaToRemember Repo into a post so that it's easier to search. You can find more the old README.md [here](http://github.com/GabrielGhe/JavaToRemember).

Credits to source article [here](http://www.programcreek.com/2012/11/top-10-algorithms-for-coding-interview/)...

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

<!-- 
#########################################
#
#     Sockets
#
#########################################
-->
<br /><br /><br />
<h3><a name="sockets"></a><a href="">12. Sockets</a></h3>

Server that listens for a connection, writes the date and closes connection

<!-- Code -->
{% highlight java linenos %}
//Server
ServerSocket listener = new ServerSocket(9090);
try {
    while (true) {
        Socket socket = listener.accept();
        try {
            ObjectOutputStream out =
                new ObjectOutputStream(socket.getOutputStream());
            out.writeObject("Hi there");
        } finally {
            socket.close();
        }
    }
}
finally {
    listener.close();
}


//Client the data is sent through serialization
//to send objects, they must be serializable
Socket s = new Socket(serverAddress, 9090);
try{
  ObjectInputStream input = new ObjectInputStream(s.getInputStream());
  String answer = (String)input.readObject();
} catch(ClassCastException cce){
  cce.printStackTrace();
} finally {
  s.close();
}

//On mac, you can open a terminal and write "nc localhost 9090" to connect to server socket
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
<h3><a name="regex"></a><a href="">13. Regex</a></h3>

The full documentation can be found here [Docs](http://docs.oracle.com/javase/7/docs/api/java/util/regex/Pattern.html)

<!-- Code -->
{% highlight java linenos %}
//Long way, that can be reused
Pattern p = Pattern.compile("a*b");
Matcher m = p.matcher("aaaab");
boolean b = m.matches();

//shorthand
boolean b = Pattern.matches("a*b", "aaaaab");
{% endhighlight %}
<!-- /Code -->

**Regular-expression constructs**

<table>
  <tr>
    <td>[abc]</td>
    <td>a, b, or c (simple class)</td>
  </tr>
  
  <!-- 2 -->
  <tr>
    <td>
      [^abc]
    </td>
    <td>
      Any character except a, b, or c (negation)
    </td>
  </tr>
  
  <!-- 3 -->
  <tr>
    <td>
      [a-zA-Z]
    </td>
    <td>
      a through z or A through Z, inclusive (range)
    </td>
  </tr>
  
  <!-- 4 -->
  <tr>
    <td>
      [a-d[m-p]]
    </td>
    <td>
      a through d, or m through p: [a-dm-p] (union)
    </td>
  </tr>
  
  <!-- 5 -->
  <tr>
    <td>
      [a-z&&[def]]
    </td>
    <td>
      d, e, or f (intersection)
    </td>
  </tr>
  
  <!-- 6 -->
  <tr>
    <td>
      [a-z&&[^bc]]
    </td>
    <td>
      a through z, except for b and c: [ad-z] (subtraction)
    </td>
  </tr>
  
  <!-- 7 -->
  <tr>
    <td>
      [a-z&&[^m-p]]
    </td>
    <td>
      a through z, and not m through p: [a-lq-z](subtraction)
    </td>
  </tr>
</table>

**Predefined character classes**

<table>
  <!-- 1 -->
  <tr>
    <td>
      .
    </td>
    <td>
      Any character (may or may not match line terminators)
    </td>
  </tr>
  
  <!-- 2 -->
  <tr>
    <td>
      \d
    </td>
    <td>
      A digit: [0-9]
    </td>
  </tr>
  
  <!-- 3 -->
  <tr>
    <td>
      \D
    </td>
    <td>
      A non-digit: [^0-9]
    </td>
  </tr>
  
  <!-- 4 -->
  <tr>
    <td>
      \s
    </td>
    <td>
      A whitespace character: [ \t\n\x0B\f\r]
    </td>
  </tr>
  
  <!-- 5 -->
  <tr>
    <td>
      \S
    </td>
    <td>
      A non-whitespace character: [^\s]
    </td>
  </tr>
  
  <!-- 6 -->
  <tr>
    <td>
      \w
    </td>
    <td>
      A word character: [a-zA-Z_0-9]
    </td>
  </tr>
  
  <!-- 7 -->
  <tr>
    <td>
      \W
    </td>
    <td>
      A non-word character: [^\w]
    </td>
  </tr>
</table>


<p><b>Greedy quantifiers</b></p>

<table>
  <!-- 1 -->
  <tr>
    <td>
      X?
    </td>
    <td>
      X, once or not at all
    </td>
  </tr>
  
  <!-- 2 -->
  <tr>
    <td>
      X*
    </td>
    <td>
      X, zero or more times
    </td>
  </tr>
  
  <!-- 3 -->
  <tr>
    <td>
      X+
    </td>
    <td>
      X, one or more times
    </td>
  </tr>
  
  <!-- 4 -->
  <tr>
    <td>
      X{n}
    </td>
    <td>
      X, exactly n times
    </td>
  </tr>
  
  <!-- 5 -->
  <tr>
    <td>
      X{n,}
    </td>
    <td>
      X, at least n times
    </td>
  </tr>
  
  <!-- 6 -->
  <tr>
    <td>
      X{n,m}
    </td>
    <td>
      X, at least n but not more than m times
    </td>
  </tr>
</table>


<!-- 
#########################################
#
#     Formatting
#
#########################################
-->
<br /><br /><br />
<h3><a name="formatting"></a><a href="">14. Formatting</a></h3>

Full article can be found [here](http://examples.javacodegeeks.com/core-java/lang/string/java-string-format-example/).

**Strings**

<table>
  <tr>
    <td>Code</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>%s</td>
    <td>will print the string as it is.</td>
  </tr>
  <tr>
    <td>%15s</td>
    <td>will print the string as it is. If the string has less than 15 characters, the output will be padded on the left.</td>
  </tr>
  <tr>
    <td>%-6s</td>
    <td>will print the string as it is. If the string has less than 6 characters, the output will be padded on the left.</td>
  </tr>
  <tr>
    <td>%.8s</td>
    <td>will print maximum 8 characters of the string.</td>
  </tr>
</table>

<!-- Code -->
{% highlight java linenos %}
// Padding left
System.out.printf("%10s %10s\n", "hello", "world");

// Padding right
System.out.printf("%-10s %-10s\n", "hello", "world");

// As is
System.out.printf("%s %s\n", "hello", "world");

// Max 2 characters
System.out.printf("%.2s %.2s\n", "hello", "world");

/*
     hello      world
hello      world     
hello world
he wo    
*/
{% endhighlight %}
<!-- /Code -->

**Integers**

<table>
  <tr>
    <td>Code</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>%d</td>
    <td>will print the integer as it is.</td>
  </tr>
  <tr>
    <td>%6d</td>
    <td>will print the integer as it is. If the number of digits is less than 6, the output will be padded on the left.</td>
  </tr>
  <tr>
    <td>%-6d</td>
    <td>will print the integer as it is. If the number of digits is less than 6, the output will be padded on the right.</td>
  </tr>
  <tr>
    <td>%06d</td>
    <td>will print the integer as it is. If the number of digits is less than 6, the output will be padded on the left with zeroes.</td>
  </tr>
</table>

<!-- Code -->
{% highlight java linenos %}
// Padding left
System.out.printf("%10d %10d\n", 12345, 54321);

// Padding right
System.out.printf("%-10d %-10d\n", 12345, 54321);

// As is
System.out.printf("%d %d\n", 12345, 54321);

// fill rest of 10 digits with 0s
System.out.printf("%010d %010d\n", 12345, 54321);

/*
     12345      54321
12345      54321     
12345 54321
0000012345 0000054321
*/
{% endhighlight %}
<!-- /Code -->

**Floats**

<table>
  <tr>
    <td>Code</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>%f</td>
    <td>will print the number as it is.</td>
  </tr>
  <tr>
    <td>%15f</td>
    <td>will print the number as it is. If the number has less than 15 digits, the output will be padded on the left.</td>
  </tr>
  <tr>
    <td>%.8f</td>
    <td>will print maximum 8 decimal digits of the number.</td>
  </tr>
  <tr>
    <td>%9.4f</td>
    <td>will print maximum 4 decimal digits of the number. The output will occupy 9 characters at least. If the number of digits is not enough, it will be padded</td>
  </tr>
</table>

<!-- Code -->
{% highlight java linenos %}
// Padding left
System.out.printf("%14f %14f\n", 123.456789, 987.654321);

// Padding right
System.out.printf("%-14f %-14f\n", 123.456789, 987.654321);

// As is
System.out.printf("%f %f\n", 123.456789, 987.654321);

// 3 digit Precision + left padding 
System.out.printf("%14.3f %14.3f\n", 123.456789, 987.654321);

/*
    123.456789     987.654321
123.456789     987.654321    
123.456789 987.654321
       123.457        987.654
*/
{% endhighlight %}
<!-- /Code -->


<!-- 
#########################################
#
#     HashMap
#
#########################################
-->
<br /><br /><br />
<h3><a name="hashmap"></a><a href="">15. HashMap</a></h3>

HashMaps & HashTables allow inserts, deletes and gets at O(1).
HashTables are synchronized while HashMaps are not. HashTables do not allow null keys or values.
HashMaps allows 1 null key and unlimited null values.
Source: [here](http://stackoverflow.com/questions/40471/differences-between-hashmap-and-hashtable)

<!-- Code -->
{% highlight java linenos %}
HashMap<String, Integer> map = new HashMap<String, Integer>();
map.put("a", 1); // { a:1 }
map.put("b", 2); // { a:1, b:2 }
map.put("c", 3); // { a:1, b:2, c:3 }

map.get("a");    // 1
map.containsKey("d"); // false
map.values();    // [1, 2, 3]
map.keySet();    // ["a", "b", "c"]
map.remove("a"); // { b:2, c:3 }
map.clear();     // {}
{% endhighlight %}
<!-- /Code -->