---
layout: post
title: "Attributes"
description: "Attributes can be used to add more information about a particular class in C#. This is an example (and code) of where you would use one. More info can be found [here](https://msdn.microsoft.com/en-us/library/aa288059.aspx)."
category: csharp
tags: [c#, attributes]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

Attributes can be used to add more information about a particular class in C#. This is an example (and code) of where you would use one. More info can be found [here](https://msdn.microsoft.com/en-us/library/aa288059.aspx).

<!-- Assigning -->
<h3>Assigning</h3>

{% highlight csharp linenos=table  %}
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

[Database("https://....", 1, comment = "My mongo database class")]
public class MongoDB {
    // ...
}
{% endhighlight %}

<!-- Retrieving -->
<h3>Retrieving</h3>

{% highlight csharp linenos=table  %}
// Given the code above

public class GetAttributeClass {
    public static void GetAttributeData() {
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
}

// Output:
// My url is https://.... - My mongo database class
{% endhighlight %}

<!-- Cool Applications of Attributes -->
<h3>Cool Applications of Attributes</h3>

{% highlight csharp linenos=table  %}
public class NoAttribute {
  
}

[Database("https://something....", 2)]
public class Sql {
    
}

public class Program {
    public static void Main(string[] args) {
        // Retrieve all the classes that have a DatabaseAttribute
        var databaseClasses = from t in Assembly.GetExecutingAssembly().GetTypes()
                              where t.GetCustomAttributes<DatabaseAttribute>().Count() > 0
                              select t;
        foreach(var db in databaseClasses) {
            Console.WriteLine(t.Name);
        }
    }
}

// Output:
// MongoDB
// Sql
{% endhighlight %}