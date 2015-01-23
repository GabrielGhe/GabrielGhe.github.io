---
layout: post
title: "Extension Methods"
description: ""
category: csharp
tags: [c#, extension]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

This is you extend a class that already exists and that you don't have access to. More info can be found [here](https://msdn.microsoft.com/en-us/library/bb311042.aspx).

First declare a static class, then create a static method that has `this` in front of the first parameter... Done!

{% highlight csharp linenos %}
public class Program {
    public static void Main(string[] args) {
       var person = new Person { Name="Tom", Age=5 };
       person.SayHello(); // Hello, my name is Tom and I'm 5
    }  
}


public class Extensions {
    public static void SayHello(this Person person) {
        Console.WriteLine("Hello, my name is {0} and I'm {1}", person.Name, person.Age);
    }
}
{% endhighlight %}