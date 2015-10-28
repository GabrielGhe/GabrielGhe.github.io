---
layout: post
title: "Algorithm: Boyer Moore Horspool"
description: "Ever wonder how the `Ctrl+F` function works in browsers? It uses a string matching algorithm like `Boyer Moore Horspool`'s"
category: gabrielghe
tags: [algorithm, logic, substring, search, string, matching]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

Being able to search for a string in a larger string is very important in computer science. There are a number of applications, not the least of which is the `Ctrl+F` command that everyone is used to. [Boyer-Moore](http://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_string_search_algorithm) is an extremely fast algorithm for string search and it runs in O(n) time. The problem is that Boyer-Moore's implementation is not trivial.

All is not lost, there is a derivation of Boyer-Moore which is easier to implement. It is called the [Boyer-Moore-Horspool](http://en.wikipedia.org/wiki/Boyer%E2%80%93Moore%E2%80%93Horspool_algorithm) algorithm. I will be going over the code for this algorithm in this post.


<!-- Content -->
<h3>Content</h3>

The algorithm goes from the beginning to the end of the long text comparing from the back of the sub. 

Let's see an example.

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
                          |||||
 */
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->



Beautiful, isn't it? How does it work? Well, it creates a dictionary mapping the characters in the substring to how much to skip ahead so that the characters align. At the penultimate step, it sees that r and n do not match, so it looks up r in the dictionary. It finds r which says to move over by 1. We then try to match the substring backwards again. This time, we succeed.


Here is the full implementation.

<!-- Code _______________________________________-->
{% highlight csharp linenos %}
public static int BoyerMooreHorspool(string text, string sub) {
    int length = sub.Length;
    // This is our step dictionary
    Dictionary<char, int> badTable = new Dictionary<char, int>();
    for (int i = 0; i < length; ++i) {
        // this is how much we have to skip to get from the last char
        // to each other char
        badTable[sub[i]] = length - i - 1;
    }
    // the last character is always the length of the substring
    badTable[sub[length - 1]] = length;

    int mainIdx = length - 1; // pointer which will go over text
    int subIdx = length - 1;  // pointer which will go over sub

    // while the text pointer isn't at the end
    while (mainIdx < text.Length) {
        int tempMain = mainIdx;

        // we found a match!
        if (text[mainIdx] == sub[subIdx]) {
            int tempSub = subIdx;

            // now try to go backwards and see 
            // if the other characters match too
            while ((tempMain > 0 && mainIdx - tempMain) < (length - 1)
                    && text[tempMain]) == sub[tempSub]) {
                --tempMain;
                --tempSub;
            }

            // all characters match, return the beginning of the match
            if ((mainIdx - tempMain) == (length - 1)) {
                return tempMain;
            }
        }

        // not all characters match, look if the
        // non matching character is in our table
        if (badTable.ContainsKey(text[tempMain])) {
            // it's in our table, move the mainIdx
            // forward by that number
            mainIdx += badTable[text[tempMain]];
        } else {
            // otherwise, just move forward
            // by the length of sub
            mainIdx += length;
        }
    }
    return -1;
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->