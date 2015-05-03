---
layout: post
title: "Swift: Enums and Switch"
description: ""
category: swift
tags: [ios]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

I'm sure most programmers know about [enums](https://developer.apple.com/library/ios/documentation/Swift/Conceptual/Swift_Programming_Language/Enumerations.html) and [switchs](https://developer.apple.com/library/ios/documentation/Swift/Conceptual/Swift_Programming_Language/ControlFlow.html). The ones found in Swift are very interesting. They have some very useful features which I'll be talking about in this post.

<!-- Content -->
<h3>Content</h3>

<!-- Enum -->
<h4>Enum</h4>

First, let's talk about enumerations in swift. They are declared in the following way.

<!-- Code _______________________________________-->
{% highlight swift linenos %}
enum DogBreed {
    case Yorkie
    case Maltese
    case Husky
    case Bishon
}

enum JavascriptFrameworks {
    case AngularJS, ReactJS, BackboneJS, EmberJS
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


To set an enum to a variable, you do the following. Once the variable knows that it will be holding DogBreed's, you don't have to specify the enum, just the type.

<!-- Code _______________________________________-->
{% highlight swift linenos %}
var myDogsBreed = DogBreed.Yorkie
myDogBreed = .Husky
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


One cool thing about swift's enums is that you can have associate more information with a particular type.

<!-- Code _______________________________________-->
{% highlight swift linenos %}
enum BarCode {
    case UPCA(Int, Int, Int, Int)
    case QRCode(String)
}

var productBarcode = Barcode.UPCA(8, 85909, 51226, 3)
productBarcode = .QRCode("ABCDEFGHIJKLMNOP")
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


You can also set raw values to an enum's types.

<!-- Code _______________________________________-->
{% highlight swift linenos %}
enum Planet: Int {
    case Mercury = 1, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune
}

let earthsOrder = Planet.Earth.rawValue // holds 3
let possiblePlanet:Planet? = Planet(rawValue: 7)
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


Enums can have methods, but like structs they need the `mutating` keyword in front of the method if it modifies the state of the enum.

<!-- Code _______________________________________-->
{% highlight swift linenos %}
enum TriStateSwitch {
    case Off, Low, High
    mutating func next() {
        switch self {
        case Off:
            self = Low
        case Low:
            self = High
        case High:
            self = Off
        }
    }
}

var ovenLight = TriStateSwitch.Low
ovenLight.next() // .High
ovenLight.next() // .Off
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->



<!-- Switch -->
<h4>Switch</h4>

The switch statement is, by itself, powerful. Combined with the enum, it becomes amazing.