---
layout: post
title: "Counting sort"
description: "
I don't need to mention why sorting data can be extremely helpful. If you are searching for an element in a list of a million elements, the O(log n) algorithm will take 20 searches to find your element while the O(n) time will take a million searches.

<br />

There are many [sorting algorithms](https://en.wikipedia.org/wiki/Sorting_algorithm), the good ones run in O(nlogn) and the great ones run in O(n). I'll be showing you how to perform a counting sort which runs in O(n).
"
category: university
tags: [sorting, java, linear, python]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

{{ page.description }}

<!-- Content -->
<h3>Content</h3>

This sort works very well for lists of numbers that are within a specific range. For example, given an array with values that are within the range `[0, 10[` and a list like `list = [1, 2, 6, 3, 3, 7, 8]`. You can do the following:

<!-- Code _______________________________________-->
{% highlight python linenos=table %}
list = [1, 2, 6, 3, 3, 7, 8]

newList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] //10 elements

for listIndex in range(10): //[0, 10[
    # get what the value is at position listIndex
    newListIndex = list[listIndex]

    # the value we got above becomes the index for the new list
    # we increment the value at that position to indicate that
    # we have seen that value
    newList[newListIndex] += 1

for value in newList:
    # if the value is not 0, which means that
    # that value has been seen, print it
    if value != 0:
        print(value)
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

That works for a list of integers, but how would we sort a list of strings that have an integer id? The code below is how you would perform a [stable](https://en.wikipedia.org/wiki/Category:Stable_sorts) counting sort.

<!-- Code _______________________________________-->
{% highlight java linenos=table %}
public ArrayList<String> countingSort(String[] lines) {
    // each line in lines looks like '3 thing' or '7 otherThing'
    Map<Integer, ArrayList<String>> map = new HashMap<>();

    populateMap(map, lines);
    return createList(map);
}

public void populateMap(Map<Integer, ArrayList<String>> map, String[] lines) {
    for (int i=0; i < lines; ++i) {
        String line = lines[i];
        int key = Integer.parseInt(line.split(" ")[0]);
        String value = line.split(" ")[1];
        initializeKey(map, key);
        map.get(key).add(value);
    }
}

public Arrays<String> createList(Map<Integer, ArrayList<String>> map) {
    ArrayList<String> newList = new ArrayList<>();
    // keys range in [0, 100[
    for (int i=0; i < 100; ++i) { 
        if (map.containsKey(i)) {
            ArrayList<String> list = map.get(i);
            newList.addAll(list);
        }
    }
    return newList;
}

public void initializeKey(Map<Integer, ArrayList<String>> map, int key) {
    if (!map.containsKey(key)) {
        map.put(key, new ArrayList<String>());
    }
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

Hopefully the code is self-explanitory. We create a map that links ids (keys) to string values. By putting them in the key as we see them, we create a stable sort.

Here's an amazing animation from [USFCA](https://www.cs.usfca.edu/~galles/visualization/CountingSort.html).

![Title]({{ ASSET_PATH }}/../images/2016-03-09-counting-sort.gif)