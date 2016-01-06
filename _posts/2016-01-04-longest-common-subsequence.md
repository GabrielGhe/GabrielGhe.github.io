---
layout: post
title: "Longest Common Subsequence"
description: "The longest common subsequence is an old algorithm problems. You might ask yourself what applications it might have. Well 2 very important applications of the LCS are file comparison and molecular biology. Read on to find out how it works. You can find the wiki [here](https://en.wikipedia.org/wiki/Longest_common_subsequence_problem)"
category: university
tags: [string, sequence, algorithm, substring, logic]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

The longest common subsequence is an old algorithm problems. You might ask yourself what applications it might have. Well 2 very important applications of the LCS are file comparison and molecular biology. Read on to find out how it works. You can find the wiki [here](https://en.wikipedia.org/wiki/Longest_common_subsequence_problem)


<!-- Content -->
<h3>Content</h3>

What is the longest common subsequence? Given 2 strings, the LCS finds the ordered sequence of characters that is common to both strings. Here's an example.

sequence X: ABCDEFG
sequence Y: BCDGK

The sequence `B -> C -> D -> G` is the longest common subsequence. Those characters appear in both strings in that order.


<!-- Solution -->
<h3>Solution</h3>

The longest common subsequence is a dynamic programming question. I will make another post about how to approach and solve dynamic programming questions in another post. It's important to note that there are 4 parts to a dynamic programming solution.

1. Overlapping subproblems
2. Recursive calls
3. Create a table and fill it out bottom-up style (or memoization)
4. Use result table to find solution
