---
layout: post
title: "Operator overloading"
description: "This is how you overload an operator. More info can be found [here](http://msdn.microsoft.com/en-us/library/aa288467(v=vs.71).aspx).g"
category: csharp
tags: [c#, csharp, operator]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

This is how you overload an operator. More info can be found [here](http://msdn.microsoft.com/en-us/library/aa288467(v=vs.71).aspx).

<!-- Normal -->
<h3>Normal</h3> 

{% highlight csharp linenos=table  %}
public class Complex {
    public static Complex operator +(Complex c1, Complex c2) 
    {
        return new Complex(c1.real + c2.real, c1.imaginary + c2.imaginary);
    }   
}

class Test {
    static void Main(){
        Complex num1 = new Complex(2,3);
        Complex num2 = new Complex(3,4);

        // Add two Complex objects (num1 and num2) through the
        // overloaded plus operator:
        Complex sum = num1 + num2;
    } 
}

/*
 *  First complex number:  2 + 3i
 *  Second complex number: 3 + 4i
 *  The sum of the two numbers: 5 + 7i
 */
{% endhighlight %}

<!-- Implicit and Explicit -->
<h3>Implicit and Explicit</h3>

{% highlight csharp linenos=table  %}
public class MyObject {
    // Implicit conversion from MyObject to string. Maps true to 
    // "MyObject.Truthy" and false to "MyObject.Falsy"
    public static implicit operator string(MyObject x) {
        return MyObject.value.ToString();
    }

    // Explicit conversion from MyObject to int.
    public static explicit operator int(MyObject x) {
        return MyObject.value;
    }   
}

class Test {
    static void Main(){
        MyObject obj = new MyObject(5);
        Console.WriteLine(obj);         // implicit conversion to string
        Console.WriteLine( (int)obj );  // explicit conversion to int
    } 
}

/*
 *  5
 *  5
 */
{% endhighlight %}

