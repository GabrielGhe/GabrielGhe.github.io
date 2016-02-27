---
layout: post
title: "Manacher's Algorithm: Longest Palindromic Substring"
description: "
One of the most interesting algorithms is to find the longest palindromic substring in O(n) time. A palindrome is a string that is the same when reversed. For example, `Dr. Awkward` is a palindrome. If we remove non alphanumeric characters and make each character lower case, it becomes `drawkward` which is the same when reversed. For more information, you can look at [Manacher's Algorithm wiki page](https://en.wikipedia.org/wiki/Longest_palindromic_substring).
"
category: university
tags: [algorithm, string, palindrome, substring, linear]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

{{ page.description }}

<!-- Content -->
<h3>Content</h3>

Below is a video that explains the algorithm very well, but I made a quick summary for myself and for you guys.

<iframe width="560" height="315" src="https://www.youtube.com/embed/nbTSfrEfo6M" frameborder="0" allowfullscreen></iframe>

<!-- Summary -->
<h3>Summary</h3>

The reason why the [less efficient algorithm](http://www.geeksforgeeks.org/longest-palindromic-substring-set-2/) runs in O(n^2) time is because we have to expand the palindrome from length = 0 for every single character in the string. That's the only thing stopping us from reaching O(n). Let's look at some properties of the palindrome and find a solution.

![Odd Palindrome]({{ ASSET_PATH }}/../images/2016-02-27-manachers-algorithm-longest-palindromic-substring1.png)

![Even Palindrome]({{ ASSET_PATH }}/../images/2016-02-27-manachers-algorithm-longest-palindromic-substring2.png)

A palindrome's center can either be at the position of a character (for palindromes of odd length) or between two characters (for palindromes of even length)

![Symmetric Palindrome]({{ ASSET_PATH }}/../images/2016-02-27-manachers-algorithm-longest-palindromic-substring6.png)

To make the process of finding the palindrome easier without worrying about odd or even substrings, we place a `#` character between each letter. We also place two different symbols at the front and back of the array to make it easier to compute the sides.

<br /><br />


![Symmetric Palindrome]({{ ASSET_PATH }}/../images/2016-02-27-manachers-algorithm-longest-palindromic-substring3.png)

A Palindrome's sides are symetric while in its boundries, but not past its boundaries. When we count `R - A's index`, we also count the spaces in between the two letters as shown in the image below.

![Symmetric Palindrome]({{ ASSET_PATH }}/../images/2016-02-27-manachers-algorithm-longest-palindromic-substring4.png)

<br /><br />

![Symmetric Palindrome]({{ ASSET_PATH }}/../images/2016-02-27-manachers-algorithm-longest-palindromic-substring5.png)

So we need two rules for finding ?.

1. If lenArray[mirror] goes beyond the L boundary, ? = R - ?'s index. `if (mirror - lenArray[mirror] < L) { ? = R - ?'s index }`

2. If lenArray[mirror] is within the L boundary, ? = lenArray[mirror]. `if (mirror - lenArray[mirror] >= L) { ? = lenArray[mirror]}`


<!-- Descriptive Code-->
<h3>Descriptive Code</h3>

<!-- Code _______________________________________-->
{% highlight java linenos=table %}
public int manachers(String s) {
    // [$, #, a, #, b, #, a, #, @]
    char[] processedArray = processString(s);
    int[] palins = new int[processedArray.length];
    int c = 0;  // center
    int r = 0;  // right boundary
    int biggest = 0;

    for (int i=1; i < processedArray.length-1; ++i) {
        int mirror = getMirrorIndex(c, i);

        if (isIndexWithinRightBoundary(i, r)) {
            int distanceFromBoundary = r-i;
            int mirrorValue = palins[mirror];
            palins[i] = Math.min(distanceFromBoundary, mirrorValue);
        }

        while (doCharsNextToIndexMatch(processedArray, palins, i)) {
            expandPalindromeAtIndex(palins, i);
            biggest = Math.max(palins[i], biggest);
        }

        if (currentPalinPassedRightBoundary(i, palins, r)) {
            c = i;              // new center
            r = i + palins[i];  // new boundary
        }
    }
    return biggest;
}

/**
 *        l     c     r
 * [$, #, a, #, b, #, a, #, @]
 * [0, 0, 1, 0, 1, 0, 0, 0, 0]
 */
private boolean doCharsNextToIndexMatch(char[] arr, int[] palins, int center) {
    char left = arr[center + (1 + palins[center])];
    char right = arr[center - (1 + palins[center])];
    return left == right;
}

/**
 *     l <=     c     => r
 * [$, #, a, #, b, #, a, #, @]
 * [0, 0, 1, 0, 2, 0, 0, 0, 0]
 */
private void expandPalindromeAtIndex(int[] palins, int index) {
    ++palins[index];
}

private boolean currentPalindomePassedRightBoundary(int index, int[] palins, rightBoundary) {
    int newBoundary = index + palins[index];
    return newBoundary > rightBoundary;
}

private boolean isIndexWithinRightBoundary(int index, int rightBoundary) {
    return index < rightBoundary;
}

private int getMirrorIndex(int center, int index) {
    return 2*c - i;
}

private char[] processString(String s) {
    StringBuilder sb = new StringBuilder("$#");
    for (char c : s.toCharArray()) {
        sb.append(c);
        sb.append("#");
    }
    sb.append("@");
    return sb.toString().toCharArray();
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


<!-- Code-->
<h3>Code</h3>

<!-- Code _______________________________________-->
{% highlight java linenos=table %}
public int manachers(String s) {
    char[] chars = process(s);
    int[] palins = new int[chars.length];

    int c = 0;
    int r = 0;
    int biggest = 0;

    for (int i=1; i < chars.length-1; ++i) {
        int mirror = 2*c - i;

        if (i < r) {
            palins[i] = Math.min(r-i, palins[mirror]);
        }

        while (chars[i + (1 + palins[i])] == chars[i - (1 + palins[i])]) {
            ++palins[i];
        }

        if (palins[i] > biggest) {
            biggest = palins[i];
        }

        if (i + palins[i] > r) {
            c = i;
            r = i + palins[i];
        }
    }
    return biggest;
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->
