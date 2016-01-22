---
layout: post
title: "Python To Remember"
description: "Everything you need to know about python in 5 minutes"
category: python
tags: [string, array, dictionary, set, hash]
---
{% include JB/setup %}

<h3><a name="table-of-content"></a>Overview</h3>

Example code can be found [here](https://github.com/GabrielGhe/CoderbyteChallenges)

### Table of content ###
1.  [Arrays](#arrays)
2.  [Dicts](#dict)
3.  [Numbers](#numbers)
4.  [Probability](#probability)
5.  [String](#string)
6.  [Regex](#regex)
7.  [Other](#other)


<!-- 
#########################################
#
#   Arrays
#
#########################################
-->
<br /><br /><br />
<h3><a name="arrays"></a><a href="">1. Arrays</a></h3>
<!-- Code _______________________________________-->
{% highlight python linenos=table  %}
x = list("4321")  # ["4", "3", "2", "1"]
x.append("val1")  # ["4", "3", "2", "1", "val1"]
x.pop()           # ["4", "3", "2", "1"]
x.pop(0)          # ["3", "2", "1"]
x.insert(0,4)     # ["4", "3", "2", "1"]
x.sort()          # ["1", "2", "3", "4"]
x.reverse()       # ["4", "3", "2", "1"]
x = x[::-1]       # ["1", "2", "3", "4"]
max(x)            # "4"

y = ["ab", "cde", "efgh", "ij"]
sorted(y, key = len)    # ['ab', 'ij', 'cde', 'efgh']
sorted(y, key = len, reverse = True)  # ['efgh', 'cde', 'ab', 'ij']
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

<!-- 
#########################################
#
#   Dicts
#
#########################################
-->
<br /><br /><br />
<h3><a name="dicts"></a><a href="">2. Dicts</a></h3>
<!-- Code _______________________________________-->
{% highlight python linenos=table  %}
dic = {"y": 6, "x": 5}
dic.keys()         # ["y", "x"]
dic.values()       # [6, 5]
dic["z"] = 4       # dic = {"y": 6, "x": 5, "z": 4}
dic.pop("z", None) # dic = {"y": 6, "x": 5}

dict( [("hello",1), ("thing",2), ("yay", 3)] )
# {'thing': 2, 'yay': 3, 'hello': 1} 
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

<!-- 
#########################################
#
#   Numbers
#
#########################################
-->
<br /><br /><br />
<h3><a name="numbers"></a><a href="">3. Numbers</a></h3>
<!-- Code _______________________________________-->
{% highlight python linenos=table  %}
int("4")          # 4
"{0:b}".format(4) # '101'
2**3              # 8 (2^3)
4**.5             # 2.0
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

<!-- 
#########################################
#
#   Probability
#
#########################################
-->
<br /><br /><br />
<h3><a name="probability"></a><a href="">4. Probability</a></h3>
<!-- Code _______________________________________-->
{% highlight python linenos=table  %}
import itertools

itertools.combinations(array,x)  # array choose x
for comb in itertools.combinations(array,x):
  # do stuff
  
itertools.permutations(arr, x)   # permutation
for comb in itertools.permutations(array,x):
  # do stuff
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

<!-- 
#########################################
#
#   String
#
#########################################
-->
<br /><br /><br />
<h3><a name="string"></a><a href="">5. String</a></h3>
<!-- Code _______________________________________-->
{% highlight python linenos=table  %}
x = raw_input()  # "A bcdefg  "

len(x)      # 10
x[0]        # "A"
sorted(x)   # [' ', ' ', ' ', 'A', 'b', 'c', 'd', 'e', 'f', 'g']

x.lower()   # "a bcdefg  "
x.upper()   # "A BCDEFG  "

x += str(5) # "A bcdefg  5"
x[:-1]      # "A bcdefg  "
x[2:4]      # "bc"         x[startIndex:endIndexExluded:step]

x.title()       # "A Bcdefg  "
x[0].isalpha()  # True
x[0].isdigit()  # False

x.split()       # ["A", "bcdefg"]
"".join( sorted(x) )  # "   Abcdefg"
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->



<!-- 
#########################################
#
#   Regex
#
#########################################
-->
<br /><br /><br />
<h3><a name="regex"></a><a href="">6. Regex</a></h3>
<!-- Code _______________________________________-->
{% highlight python linenos=table hl_lines="" %}
import re

pattern = r'\d{3}-\d{3}-\d{4}'
text = "Hello, my name is Goku. My number is 811-910-9324. My son's number is 643-948-2345"

phoneNumRegex = re.compile(pattern)
matches = phoneNumRegex.search(text)
print(matches.group())              #"811-910-9324"

matches = re.search(pattern, text)
print(matches.group())              #"811-910-9324"

phoneNumRegex.findAll(text)         #["811-910-9324", "643-948-2345"]
re.findAll(pattern, text)           #["811-910-9324", "643-948-2345"]
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


<!-- 
#########################################
#
#   Other
#
#########################################
-->
<br /><br /><br />
<h3><a name="other"></a><a href="">7. Other</a></h3>
<!-- Code _______________________________________-->
{% highlight python linenos=table  %}
# ternery
5 if booleanValue else 6  # (booleanValue)? 5 : 6;

# generate new list from existing list
x = ['a', '1', 'b', '2', 'c', '3', 'd', '4']
x = [c for c in x if c.isalpha()]   # ['a', 'b', 'c', 'd']
x = [c for c in x if c.isdigit()]   # ['1', '2', '3', '4']

# get idx and value in loop
for idx, val in enumerate(array):

# sets
# https://docs.python.org/2/library/sets.html
s = set([1, 1, 3, 5, 6, 6, 4])      # set([1, 3, 4, 5, 6])
s.add(8)                            # set([1,3,4,5,6,8])
s.discard(3)                        # set([1,4,5,6,8])
s.remove(4)                         # set([1,5,6,8]) throws error if key not present
6 in s                              # True
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->