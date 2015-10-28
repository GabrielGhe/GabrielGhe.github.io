---
layout: post
title: "Regular Expressions"
description: "In this post, I will be talking about python's regular expression module called `re`. I'll mainly give examples. More information can be found here [here](https://developers.google.com/edu/python/regular-expressions)."
category: python
tags: [python, regex]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

In this post, I will be talking about python's regular expression module called `re`. I'll mainly give examples. More information can be found here [here](https://developers.google.com/edu/python/regular-expressions).

<!-- Examples -->
<h3>Examples</h3>

{% highlight python linenos %}
import re

# look for 'thing' in the string 'that thing'
match = re.search(r'thing', 'that thing')
# match.group() == 'thing'

# look for 'thig' in the string 'that thing'
match = re.search(r'thig', 'that thing')
# match == None

# . = any character except \n
match = re.search(r'..d+', 'abcdd')
# match.group() == 'bcdd' 
{% endhighlight %}