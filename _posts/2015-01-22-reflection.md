---
layout: post
title: "Reflection"
description: ""
category: csharp
tags: [c#, reflection]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

Reflection allows you to get information about your Assembly (.dll, solution) and about classes. You could look for all the classes that implement a certain interface or look at all the methods of a class. More info can be found [here](https://msdn.microsoft.com/en-us/library/ms173183.aspx).

<!-- Example -->
<h3>Example</h3>


Given

<!-- Code -->
{% highlight csharp linenos %}
public class BaseClass {
    // ...
}
public class Jake : BaseClass, ITest {
    // ...
}
public class Tom : ITest {
    // ...
}
public class Random : BaseClass {
    // ...
}
{% endhighlight %}
<!-- END Code -->

You can do the following


<!-- Code -->
{% highlight csharp linenos %}
public class Instantiator {
    public static void InstantiateITest() {
        var instances = from t in Assembly.GetExecutingAssembly().GetTypes()  // Get every class
                        where t.GetInterfaces().Contains(typeof(ITest))       // That implements ITest interface
                              && t.GetConstructor(Type.EmptyTypes) != null    // and has a constructor
                        select Activator.CreateInstance(t) as ITest;          // create an instance
        foreach(var instance in instances) {
            // do something with them
        }
        // instances = [Jake, Tom]
    }

    public static void InstantiateBaseClasses() {
        var instances = from t in Assembly.GetExecutingAssembly().GetTypes()  // Get every class
                        where t.IsSubClassOf(typeof(BaseClass))               // That derives from BaseClass
                              && t.GetConstructor(Type.EmptyTypes) != null    // and has a constructor
                        select Activator.CreateInstance(t) as BaseClass       // create an instance
        foreach(var instance in instances) {
            // do something with them
        }
        // instances = [Jake, Random]
    }
}
{% endhighlight %}
<!-- END Code -->