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

The algorithm goes from the beginning to the end of the long text comparing from the back of the sub. 

Let's see an example. Given the following code, this is what happens.

<!-- Code _______________________________________-->
{% highlight csharp linenos %}
/*
I wish I had more time to learn algorithms
learn
    |

I wish I had more time to learn algorithms
     learn
         |

I wish I had more time to learn algorithms
          learn
              |

I wish I had more time to learn algorithms
               learn
                   |

I wish I had more time to learn algorithms
                    learn
                        |

I wish I had more time to learn algorithms
                         learn
                             |

I wish I had more time to learn algorithms
                          learn
                              |
 */
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->



Beautiful, isn't it?

<!-- Code _______________________________________-->
{% highlight csharp linenos %}

{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

Not commented code. Bare with me, I will explain it below.

<!-- Code _______________________________________-->
{% highlight csharp linenos %}
public static int BoyerMooreHorspool(string text, string sub) {
    int length = sub.Length;
    Dictionary<char, int> badTable = new Dictionary<char, int>();
    for (int i = 0; i < length; ++i) {
        badTable[sub[i]] = length - i - 1;
    }
    badTable[sub[length - 1]] = length;

    int mainIdx = length - 1;
    int subIdx = length - 1;

    while (mainIdx < text.Length) {
        if (text[mainIdx] == sub[subIdx]) {
            int tempMain = mainIdx;
            int tempSub = subIdx;
            while ((tempMain > 0 && mainIdx - tempMain) < (length - 1) && text[tempMain]) == sub[tempSub]) {
                --tempMain;
                --tempSub;
            }
            if ((mainIdx - tempMain) == (length - 1)) {
                return temp;
            }
            if (badTable.ContainsKey(text[tempMain])) {
                j += length;
            } else {
                j += length;
            }
        } else if (badTable.ContainsKey(text[mainIdx])) {
            j += badTable[text[mainIdx]];
        } else {
            j += length;
        }
    }
    return -1;
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


Here's the commented version.

<!-- Code _______________________________________-->
{% highlight csharp linenos %}
public static int BoyerMooreHorspool(string text, string sub) {
    int length = sub.Length;
    Dictionary<char, int> badTable = new Dictionary<char, int>();
    for (int i = 0; i < length; ++i) {
        badTable[sub[i]] = length - i - 1;
    }
    badTable[sub[length - 1]] = length;

    int mainIdx = length - 1;
    int subIdx = length - 1;

    while (mainIdx < text.Length) {
        if (text[mainIdx] == sub[subIdx]) {
            int tempMain = mainIdx;
            int tempSub = subIdx;
            while ((tempMain > 0 && mainIdx - tempMain) < (length - 1) && text[tempMain]) == sub[tempSub]) {
                --tempMain;
                --tempSub;
            }
            if ((mainIdx - tempMain) == (length - 1)) {
                return temp;
            }
            if (badTable.ContainsKey(text[tempMain])) {
                j += length;
            } else {
                j += length;
            }
        } else if (badTable.ContainsKey(text[mainIdx])) {
            j += badTable[text[mainIdx]];
        } else {
            j += length;
        }
    }
    return -1;
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->