---
layout: post
title: "Heap Data Structure"
description: "
You're a doctor at a hospital's ER and you have many patients to see. There are too many patients to see, so you decide to make a queue program. The patients put in their names in the program and they get added to the end of the queue.

<br /><br />

That works, but it's not right. Not every patient should be treated the same. In the event that one patient has a stomach ache while another has a gunshot wound, this system would give them priority on a first come first serve basis.

<br /><br />

We need a priority queue. The priority queue will place people inside the queue based on their priority. A patient with a gunshot wound has more priority than someone who has a stomach ache. How do we make a priority queue? It's implemented as a heap data structure.
"
category: university
tags: [heap, sort, efficient, tree]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

{{ page.description }}

<!-- Content -->
<h3>Content</h3>

What does a heap look like?

<h4>Structure</h4>

First, we have to know that a heap is a complete binary tree.

![Binary tree]({{ ASSET_PATH }}/../images/2016-10-04-heap-datastructure1.png)

In a binary tree, a node has at most two child nodes.

![Complete Binary Tree]({{ ASSET_PATH }}/../images/2016-10-04-heap-datastructure2.jpg)

In a complete binary tree, every level except the last level must be filled (have two children).

<br/><br/>

There are two types of heaps: a min-heap and a max-heap. 

![Binary tree]({{ ASSET_PATH }}/../images/2016-10-04-heap-datastructure3.png)

In a max-heap, the parent node must have a higher value than its two children nodes. 

<br/><br/>

![Binary tree]({{ ASSET_PATH }}/../images/2016-10-04-heap-datastructure4.png)

In a min-heap, the parent node must have a lower value than its two children nodes.




<br/><br/>

<h4>Insertion</h4>

When we add a new node, we add at the right most position on the lowest level. 

![Binary tree]({{ ASSET_PATH }}/../images/2016-10-04-heap-datastructure5.png)

Let's say we add a `node X` with value 15.


<br/><br/>

![Binary tree]({{ ASSET_PATH }}/../images/2016-10-04-heap-datastructure6.png)

We violated the heap property (the value of the parent must be bigger than the values of its children). The parent with value 8 has a child with a value of 15. To maintain the heap property, we swap them or bubble up.


<br/><br/>

![Binary tree]({{ ASSET_PATH }}/../images/2016-10-04-heap-datastructure7.png)

The property is still violated so we must swap or bubble up again. We're done. We don't need to look on the left side because that side was already correct.



<br/><br/>

<h4>Deletion</h4>

When we remove a node, we go through 3 steps.

<br/><br/>

![Binary tree]({{ ASSET_PATH }}/../images/2016-10-04-heap-datastructure8.png)

Remove root 11 and return it


<br/><br/>

![Binary tree]({{ ASSET_PATH }}/../images/2016-10-04-heap-datastructure9.png)

Take last node inserted (right most on the lowerst level) and put it as the root


<br/><br/>

![Binary tree]({{ ASSET_PATH }}/../images/2016-10-04-heap-datastructure10.png)

We bubble down


<br/><br/>

<h4>Conclusion</h4>

This is a basic overview of the heap datastructure. I will talk about the heap's implementation and the heap sort in another post!

<!-- References -->
<h3>References</h3>

- [Binary Heap Wikipedia page](https://en.wikipedia.org/wiki/Binary_heap)
- [Heap Datastructure Wikipedia page](https://en.wikipedia.org/wiki/Heap_(data_structure))
