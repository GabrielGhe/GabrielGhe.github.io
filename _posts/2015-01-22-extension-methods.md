---
layout: post
title: "Extension Methods"
description: "This is how you extend a class that already exists and that you don't have access to. More info can be found [here](https://msdn.microsoft.com/en-us/library/bb311042.aspx)."
category: csharp
tags: [c#, extension]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

This is how you extend a class that already exists and that you don't have access to. More info can be found [here](https://msdn.microsoft.com/en-us/library/bb311042.aspx).

<!-- Examples -->
<h3>Examples</h3>

First declare a static class, then create a static method that has `this` in front of the first parameter... Done!

{% highlight csharp linenos %}
public class Extensions {
    public static void SayHello(this Person person) {
        Console.WriteLine("Hello, my name is {0} and I'm {1}", person.Name, person.Age);
    }

    public static void SayThing(this Person person, string thing) {
        Console.WriteLine("Hello {0} said {1}", thing, person.Name);
    }
}

public class Program {
    public static void Main(string[] args) {
       var person = new Person { Name="Tom", Age=5 };
       person.SayHello();         // Hello, my name is Tom and I'm 5
       person.SayThing("Random"); // Hello Random said Tom
    }
}
{% endhighlight %}