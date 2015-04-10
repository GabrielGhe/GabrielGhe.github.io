---
layout: post
title: "Swift: Generics"
description: ""
category: swift
tags: [ios, generics]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

Generics are extremely useful in any programming language. This post is all about generics in swift as the title implies. You can find more information about swift generics [here](https://developer.apple.com/library/ios/documentation/Swift/Conceptual/Swift_Programming_Language/Generics.html#//apple_ref/doc/uid/TP40014097-CH26-ID179).


<!-- Content -->
<h3>Content</h3>

**Class**

<!-- Code _______________________________________-->
{% highlight swift linenos %}
struct Stack<T> {
    var items = [T]()
    mutating func push(item: T) {
        items.append(item)
    }
    mutating func pop() -> T {
        return items.removeLast()
    }
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


**Methods/Functions**

<!-- Code _______________________________________-->
{% highlight swift linenos %}
func swapTwoValues<T>(inout a: T, inout b: T) {
    let temporaryA = a
    a = b
    b = temporaryA
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


**Type Constraints**

<!-- Code _______________________________________-->
{% highlight swift linenos %}
func allItemsMatch<C1: Container, C2: Container 
    where C1.ItemType == C2.ItemType, C1.ItemType: Equatable>
    (someContainer: C1, anotherContainer: C2) -> Bool {
        // check that both containers contain the same number of items
        if someContainer.count != anotherContainer.count {
            return false
        }
        
        // check each pair of items to see if they are equivalent
        for i in 0..<someContainer.count {
            if someContainer[i] != anotherContainer[i] {
                return false
            }
        }
        
        // all items match, so return true
        return true
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->