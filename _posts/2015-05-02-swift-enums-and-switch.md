---
layout: post
title: "Swift: Enums and Switch"
description: "I'm sure most programmers know about [enums](https://developer.apple.com/library/ios/documentation/Swift/Conceptual/Swift_Programming_Language/Enumerations.html) and [switchs](https://developer.apple.com/library/ios/documentation/Swift/Conceptual/Swift_Programming_Language/ControlFlow.html). The ones found in Swift are very interesting. They have some very useful features which I'll be talking about in this post."
category: swift
tags: [ios, tuples, conditions, control flow]
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

<!-- Code _______________________________________-->
{% highlight swift linenos %}
switch `value to consider` {
    case `value 1`:
        // do stuff
    case `value 2`:
        // do other stuff
    case `value 3`:
        // you guessed it, more stuff
    default:
        // none of the others matched
}


let ch: Character = "a"
switch ch {
    case "a", "A":
        println("The character is `A`")

    case "b":
        fallthrough
    case "B":
        println("The character is 'B'")
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


It can also work with ranges.

<!-- Code _______________________________________-->
{% highlight swift linenos %}
let num:UInt = 3_000
switch num {
    case 0...9:
        // single digit, no implicit fallthrough
    case 10...99:
        // two digits
    case 100...999
        // three digits
    default:
        // more than 3 digits

}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


The switch statement can be used with tuples and have conditions.

<!-- Code _______________________________________-->
{% highlight swift linenos %}
let coor = (1, 1)
switch coor {
    case (0, 0):
        println("Origin is at (0,0)")
    case (_, 0):
        println("Origin of (\(coor.0), 0) is on the x-axis")
    case (0, _):
        println("Origin of (0, \(coor.1)) is on the y-axis")
    case (-2...2, -2...2):
        println("Origin's x and y values are between -2 and 2")
    default:
        println("Dunno where origin is")
}
// labeled control statements
coorLoop: while {
    switch coor {
        case (let x, 0):
            println("The x value is \(x) while the y value is 0") 
        case let (x, y) where x == y:
            println("The x value is \(x) and the y value is \(y)")
        case let (x, y) where x == -y:
            println("The x value is \(x) and the y value is \(y)")
            continue coorLoop
        default:
            break coorLoop
    }   
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


When using the switch statement with enums, you get the following.

<!-- Code _______________________________________-->
{% highlight swift linenos %}
switch productBarcode {
    case .UPCA(let numberSystem, let manufacturer, let product, let check):
        println("UPC-A: \(numberSystem), \(manufacturer), \(product), \(check).")
    case .QRCode(let productCode):
        println("QR code: \(productCode).")
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->