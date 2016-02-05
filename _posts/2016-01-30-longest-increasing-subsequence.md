---
layout: post
title: "Longest Increasing Subsequence"
description: "
The longest increasing subsequence is another good algorithm problem. It is used in physics, mathematics and algorithms. One concrete application is the [Patience Diff](http://stackoverflow.com/questions/12458641/applications-of-longest-increasing-subsquence#answer-13159639) to find the difference between two files. You can read the [wiki](https://en.wikipedia.org/wiki/Longest_increasing_subsequence).
"
category: university
tags: [string, sequence, algorithm, substring, logic, dynamic programming, java]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

{{ page.description }}

<!-- Content -->
<h3>Content</h3>

The Longest Increasing Subsequence of a string finds longest ordered sequence of characters that is in increasing order, but are not necessarily contiguous. In the string "testing", the LIS is E->I->N.

There are several ways to compute the longest increasing subsequence. The [solution with the best time complexity](http://www.geeksforgeeks.org/longest-monotonically-increasing-subsequence-size-n-log-n/) is O(nlogn). The solution I'm going to show runs in O(n^2) but is fairly simple to implement.

You use the [Longest Common Subsequence]({% post_url 2016-01-04-longest-common-subsequence %}). You send in your word along with the sorted version of your word to the LCS method. Let's see an example using the word "testing" and the sorted version "eginstt".

![Example]({{ ASSET_PATH }}/images/2016-01-30-longest-increasing-subsequence.png)


The LCS will build the table shown above. We build a solution the same way we did in the [LCS post]({% post_url 2016-01-04-longest-common-subsequence %}). 

![solution]({{ ASSET_PATH }}/images/2016-01-30-longest-increasing-subsequence2.gif)

This returns the LIS "ein". 