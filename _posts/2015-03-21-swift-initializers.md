---
layout: post
title: "Swift: Initializers"
description: ""
category: swift
tags: [ios, init]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

Initializers in Swift are a little different than the ones found in other classes. This post is all about the dreadful `init`. You can find more information on initialization [here](https://developer.apple.com/library/ios/documentation/Swift/Conceptual/Swift_Programming_Language/Initialization.html).

<!-- Content -->
<h3>Content</h3>

There are 2 kinds of inits: designated init and convenience init.

<!-- Code _______________________________________-->
{% highlight swift linenos %}
class MyClass {
    var instanceVariable:Int

    init(passedVariable: Int){
        instanceVariable = passedVariable
    }
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

In an init, you must initialize all your properties. This includes constants (that use `let`) and optionals. Optionals can have a value of `nil` so they are initialized by default.

<!-- Code _______________________________________-->
{% highlight swift linenos %}
class MyClass {
    let constantVar:String
    var optionalVar:String?

    init(passedVar:String) {
        constantVar = passedVar
    }
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

<!-- Designated Init -->
<h3>Designated Init</h3>

A `designated init` must first initialize all of its own properties before calling `super.init`.

A `designated init` must call `super.init` before assigning a value to an inherited property.


<!-- Convenience Init -->
<h3>Convenience Init</h3>

A `convenience init` must call a designated init of its own class (can't call `super.init`).
<!-- Code _______________________________________-->
{% highlight swift linenos %}
class Food {
    var name: String
    init(name: String) {
        self.name = name
    }
    convenience init() {
        self.init(name: "[Unnamed]")
    }
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->
![Results]({{ ASSET_PATH }}images/2015-03-21-swift-initializers1.png)

A `convenience init` must call a `designated init` before it can set any property values.

A `convenience init` can call a `designated init` indirectly (through another `convenience init`)
<!-- Code _______________________________________-->
{% highlight swift linenos %}
class RecipeIngredient: Food {
    var quantity: Int
    init(name: String, quantity: Int) {
        self.quantity = quantity
        super.init(name: name)
    }
    override convenience init(name: String) {
        self.init(name: name, quantity: 1)
    }
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->
![Results]({{ ASSET_PATH }}images/2015-03-21-swift-initializers2.png)


<!-- Inherited Init -->
<h3>Inherited Init</h3>

If you inherit from a class and provide no inits. You inherit all the super class' inits.

<!-- Code _______________________________________-->
{% highlight swift linenos %}
class ShoppingListItem: RecipeIngredient {
    var purchased = false
    var description: String {
        var output = "\(quantity) x \(name)"
        output += purchased ? " ✔" : " ✘"
        return output
    }
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

![Results]({{ ASSET_PATH }}images/2015-03-21-swift-initializers3.png)


<!-- Required Init -->
<h3>Required Init</h3>

You can force a subclass to override a super class' initializer by adding `required` in front.

<!-- Code _______________________________________-->
{% highlight swift linenos %}
class SomeClass {
    required init() {
        // initializer implementation goes here
    }
}

class SomeSubclass: SomeClass {
    //subclass also needs a 'required' keyword
    required init() {
        // subclass implementation of the required initializer goes here
    }
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


<!-- Failable Init -->
<h3>Failable Init</h3>

An initializer can fail and return nil. Why would we do this? Here's one example.

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
let image = UIImage(named: "imageName") //image is an (UIImage?)

if let otherImage = UIImage(named: "imageName") {
    // image was successfully created
} else {
    // couldn't create the image
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->