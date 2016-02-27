---
layout: post
title: "Union Find"
description: "
[The Union-Find Disjoint Set data structure](https://en.wikipedia.org/wiki/Disjoint-set_data_structure) is very interesting. The UFDS is used to model several disjoint (not connected) sets and is in the domain of percolation theory. It allows you to find if an object is in the same set as another and which set an object should be or is in. This has some very cool and useful applications like [Kruskal's algorithm](https://en.wikipedia.org/wiki/Kruskal%27s_algorithm) to find the minimum spanning tree of a graph. It can also be used social networks in the form of friend circles.
"
category: university
tags: [graph, search, union, tree, algorithm]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

{{ page.description }}

<!-- Content -->
<h3>Content</h3>

We have a group of Disjoint Sets and we want to group them together. To do this, we need two operations: find and union.

![Disjoint Sets]({{ ASSET_PATH }}/../images/2016-02-14-union-find.png)

Find will determine what set an element is in while union will create the union of two elements.



<!-- Internal Data Structure -->
<h4>Internal Data Structure</h4>

We're going to create a [forest](https://en.wikipedia.org/wiki/Tree_(graph_theory)#Forest).

Each set will be a tree and have a representative element (the root of the tree).

![Sets]({{ ASSET_PATH }}/../images/2016-02-14-union-find2.png)

<!-- Code _______________________________________-->
{% highlight java linenos=table %}
public class Node<T> {
    T value;
    String name;
    Node<T> parent;
    Node<T>[] children;
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->



<!-- Find -->
<h4>Find</h4>

The find operation on a node `N` will simply walk up the tree and find its root `R`. You can then compare other representative elements to `R` to determine which set `N` belongs to. This runs in O(log n) where n is the number of elements in the set and the tree is balanced.

<!-- Code _______________________________________-->
{% highlight java linenos=table %}
public Node<T> find(Node<T> node) {
    while (node.getParent() != null) {
        node = node.getParent();
    }
    return node;
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->



<!-- Union -->
<h4>Union</h4>

For the union operation, we will find both the elements' roots and put them together and return the resulting representative element. Which runs in O(log n) where n is the number of elements in the set and the tree is balanced.

<!-- Code _______________________________________-->
{% highlight java linenos=table %}
public Node<T> union(Node<T> first, Node<T> second) {
    first = find(first);
    second = find(second);

    first.setParent(second);
    second.addChild(first);
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->



<!-- Kruskal's Algorithm In Action -->
<h4>Kruskal's Algorithm In Action</h4>

[![Kruskal's]({{ ASSET_PATH }}/../images/2016-02-14-union-find3.gif)](http://www.cs.usfca.edu/~galles/visualization/Kruskal.html)
