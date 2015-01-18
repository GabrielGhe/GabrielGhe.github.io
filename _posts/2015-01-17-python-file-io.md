---
layout: post
title: "Python: File Input and Output"
description: ""
category: python
tags: [io, file]
---
{% include JB/setup %}

This post is about file io in python. More information can be found [here](https://docs.python.org/2/tutorial/inputoutput.html#reading-and-writing-files).

{% highlight python linenos %}
# reading a file in 1 shot
with open('filename.txt', 'r') as file:
    content = file.read()

# reading a file, getting all the lines
with open('filename.txt', 'r') as file:
    content = file.readlines()

# writing to a file/creating a file
with open('filename.txt', 'w') as file:
    file.write('This is output')

# appending to a file
with open('filename.txt', 'ag') as file:
    file.write('This is output')
{% endhighlight %}