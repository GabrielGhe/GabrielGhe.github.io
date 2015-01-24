---
layout: post
title: "Task Parallel Library"
description: ""
category: csharp 
tags: [c#, parallel, task]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

Parallel programming is very important to know and C# does it so well. This post is all about the `System.Threading` namespace. More information can be found [here](https://msdn.microsoft.com/en-us/library/system.threading.tasks.task%28v=vs.110%29.aspx).

<!-- Example -->
<h3>Example</h3>

<h4>Creating new tasks with the constructor.</h4>

{% highlight csharp linenos %}
class Program {
    public static void Main(string[] args) {
        // Start task with the constructor
        var t1 = new Task( () => DoWork(1, 1000) );
        var t2 = Task.Factory.StartNew( () => DoWork(2, 1200) )
                             .ContinueWith( (prevTask) => DoOtherWork(2, 1200) );

        t1.Start();
    }

    public static void DoWork(int id, int sleepTime) {
        Console.WriteLine("Task {0} starting.", id);
        Thread.sleep(sleepTime);
        Console.WriteLine("Task {0} stopping.", id);
    }
}

/*
Task 2 starting.
Task 1 starting.
Task 3 starting.
Task 1 stopping.
Task 2 stopping.
Task 3 stopping.
 */
{% endhighlight %}

<h4>Creating new tasks with a factory.</h4>

{% highlight csharp linenos %}
class Program {
    public static void Main(string[] args) {
        // The factory creates a task and starts it
        var t1 = Task.Factory.StartNew( () => DoWork(1, 1000) );
        
    }

    public static void DoWork(int id, int sleepTime) {
        Console.WriteLine("Task {0} starting.", id);
        Thread.sleep(sleepTime);
        Console.WriteLine("Task {0} stopping.", id);
    }

    public static void DoOtherWork(int id, int sleepTime) {
        Console.WriteLine("Other Task {0} starting.", id);
        Thread.sleep(sleepTime);
        Console.WriteLine("Other Task {0} stopping.", id);
    }
}

/*
Task 2 starting.
Task 1 starting.
Task 1 stopping.
Task 2 stopping.
Other Task 2 starting.
Other Task 2 stopping.
 */
{% endhighlight %}

Given the code above, how do we wait on the main thread until all the tasks are done?

{% highlight csharp linenos %}
public static void Main(string[] args) {
    var t1 = Task.Factory.StartNew( () => DoWork(1, 1000) );
    var t2 = Task.Factory.StartNew( () => DoWork(2, 1200) );
    var taskList = new List<Task>{t1, t2};

    // or we could use Task.WaitAny
    Task.WaitAll( taskList.ToArray() );
    Console.WriteLine("Finished all tasks");
}
{% endhighlight %}