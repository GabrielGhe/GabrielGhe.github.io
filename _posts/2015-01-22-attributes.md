---
layout: post
title: "Attributes"
description: ""
category: csharp
tags: [c#, attributes]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

Attributes can be used to add more information about a particular class in C#. This is an example (and code) of where you would use one. More info can be found [here](https://msdn.microsoft.com/en-us/library/aa288059.aspx).

<!-- Assigning -->
<h3>Assigning</h3>

{% highlight csharp linenos %}
// Lets create an attribute that only works on classes that are used for databases
[System.AttributeUsage(System.AttributeTargets.Class)]
public class DatabaseAttribute : Attribute {
    private string _url;
    private int _id;
    public string comment;

    public DatabaseAttribute(string url, int id) {
        this._url = url;
        this._id = id;
        comment = "";
    }

    public string SayUrl() {
        return "My url is " + url;
    }
}

[Database("https://....", 1, "My mongo database class")]
public class MongoDB {
    // ...
}
{% endhighlight %}

<!-- Retrieving -->
<h3>Retrieving</h3>

{% highlight csharp linenos %}
// Given the code above

public class Program {
    // Get the attributes for MongoDB class, can have more than 1
    System.Attribute[] attrs = System.Attribute.GetCustomAttributes(typeof(MongoDB)); // System.Type

    // Display them
    foreach (System.Attribute attr in attrs) {
        if (attr is Database) {
            Database a = (Database)attr;
            System.Console.WriteLine("{0} - {1}", a.SayUrl(), a.comment);
        }
    }
}

// My url is https://.... - My mongo database class
{% endhighlight %}