---
layout: post
title: "Generators"
description: "In python, it's common to see something like `for _ in range(10)`. This says loop 10 but it also creates a list of 10 elements. If you replace the 10 with 1000000, it will create a very large list and take up all the memory for nothing. Instead, you could use a generator. A generator is like a pause and continue on a method and it improves the space complexity of your code. More information about generators can be found [here](https://wiki.python.org/moin/Generators)."
category: python
tags: [generator]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

In python, it's common to see something like `for _ in range(10)`. This says loop 10 but it also creates a list of 10 elements. If you replace the 10 with 1000000, it will create a very large list and take up all the memory for nothing. Instead, you could use a generator. A generator is like a pause and continue on a method and it improves the space complexity of your code. More information about generators can be found [here](https://wiki.python.org/moin/Generators).

A generator comprehension is the lazy version of a list comprehension.
It is just like a list comprehension except that it returns an iterator instead of the list ie an object with a next() method that will yield the next element.

Imagine you want to sum up all the numbers from 0 to 1000000. It would look something like this.

{% highlight python linenos=table  %}
def firstn(n):
     num, nums = 0, []
     while num < n:
         nums.append(num)
         num += 1
     return nums

sum_of_first_n = sum(firstn(1000000))
{% endhighlight %}

The equivilant generator will look like this.

{% highlight python linenos=table  %}
def firstn(n):
    num = 0
    while num < n:
        yield num
        num += 1

sum_of_first_n = sum(firstn(1000000))
{% endhighlight %}

You can also create generator comprehensions.

{% highlight python linenos=table  %}
# normal list comprehension
my_list = [1, 3, 5, 9, 2, 6]
filtered_list = [item for item in my_list if item > 3]
print(filtered_list) # [5, 9, 6]


# generator comprehension
filtered_gen = (item for item in my_list if item > 3)
# you can use it in a `for in` loop
# or you can pass it to the list constructor
gen_to_list = list(filtered_gen)
print(gen_to_list) # [5, 9, 6]
{% endhighlight %}