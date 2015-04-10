---
layout: post
title: "Python Generating primes"
description: ""
category: python
tags: [primes]
---
{% include JB/setup %}

Code without comments

{% highlight python linenos %}
def generatePrime(n):
    sieve = [True] * n
    for i in xrange(3, int(n**0.5)+1, 2):
        if sieve[i]:
            sieve[i*2::i] = [False] * len(sieve[i*2::i])
    return [2] + [i for i in xrange(3, n+1, 2) if sieve[i]]
{% endhighlight %}

Code with comments

{% highlight python linenos %}
def generatePrime(n):
    # create list of booleans length n
    sieve = [True] * n
    # go from 3 to sqrt(n) by 2 ex: [3, 5, 7, 9]
    for i in xrange(3, int(n**0.5)+1, 2):
        if sieve[i]:
            # if i = 3 you'd turn the following into False
            # [6, 9, 12, 15....]
            sieve[i*2::i] = [False] * len(sieve[i*2::i])
    # go through list, starting at 3, by 2. If the sieve at that index
    # is True, add it to the array
    return [2] + [i for i in xrange(3, n+1, 2) if sieve[i]]
{% endhighlight %}

Step by Step. We will use the index number instead of boolean for clarification.

{% highlight python linenos %}
# Given parameter 30

# initial sieve
sieve = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]

# index 3
# turn the following indecies false [9, 12, 15, 18, 21, 24, 27]
sieve = [0,1,2,3,4,5,6,7,8,False,10,11,False,13,14,False,16,17,False,19,20,False,22,23,False,25,26,False,28,29]

# index 5
# turn the following indecies false [10, 15, 20, 25]
sieve = [0,1,2,3,4,5,6,7,8,False,False,11,False,13,14,False,16,17,False,19,False,False,22,23,False,False,26,False,28,29]

# Go from 3 to 30 by 2. [3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29]
# If the value at that index is not False, add it to the list
returnLst = [2] + [3, 5, 7, 11, 13, 17, 19, 23, 29]
{% endhighlight %}