---
layout: post
title: "Heap Data Structure"
description: "
You're a doctor at a hospital's ER and you have many patients to see. There are too many patients to see, so you decide to make a queue program. The patients put in their names in the program and they get added to the end of the queue.

That works, except it's not good. Not every patient should be treated the same. One patient may have a stomach ache while another has a gunshot wound and this system would give patients priority on a first come first serve basis.

We need a priority queue which is implemented as a heap. The priority queue will place people inside the queue based on their priority. A patient with a gunshot wound has more priority than someone who has a stomach ache.
"
category: algorithm
tags: [heap, sort, efficient, tree]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

{{ page.description }}

<!-- Content -->
<h3>Content</h3>

First, we have to know that a heap is a complete binary tree. There are two types of heaps: a min-heap and a max-heap. 

In a max-heap, the parent node must have a higher value than its two children nodes. 

In a min-heap, the parent node must have a lower value than its two children nodes.

<!-- References -->
<h3>References</h3>
