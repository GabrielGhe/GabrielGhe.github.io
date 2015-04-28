---
layout: post
title: "Algorithm: Boyer Moore Horspool"
description: ""
category: gabrielghe
tags: [logic, substring, search]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

Being able to search for a string in a larger string is very important in computer science. There are a number of applications, not the least of which is the `Ctrl+F` command that everyone is used to. [Boyer-Moore](http://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_string_search_algorithm) is an extremely fast algorithm for string search and it runs in O(n) time. The problem is the implementation of Boyer-Moore; it is very hard to implement. 

All is not lost, there is a derivation of Boyer-Moore which is easier to implement. It is called the Boyer-Moore-Horspool algorithm. I will be going over the code for this algorithm in this post. You can learn more about it [here](http://en.wikipedia.org/wiki/Boyer%E2%80%93Moore%E2%80%93Horspool_algorithm).


<!-- Content -->
<h3>Content</h3>

Not commented code.

<!-- Code _______________________________________-->
{% highlight csharp linenos %}
public static int BoyerMoore(string text, string sub) {
    int length = sub.Length;
    Dictionary<char, int> badTable = new Dictionary<char, int>();
    for (int i = 0; i < length; ++i) {
        badTable[sub[i]] = length - i - 1;
    }
    badTable[sub[length - 1]] = length;

    int main_idx = length - 1;
    int sub_idx = length - 1;

    while (main_idx < text.Length) {
        if (text[main_idx] == sub[sub_idx]) {
            int temp_main = main_idx;
            int temp_sub = sub_idx;
            while ((temp_main > 0 && ma))
        }

    }
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->