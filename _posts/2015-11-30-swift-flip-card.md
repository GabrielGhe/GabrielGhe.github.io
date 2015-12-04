---
layout: post
title: "Swift: Flip Card"
description: "I've implemented a card flip in javascript, jquery, angularjs but now that I've been learning swift, I've been wondering how it's done. If you've been wondering the same thing, you're in luck. This post will guide you through the code necessary to make a card and flip it in swift. I have to give credit to [this](http://www.codingricky.com/flipping-cards-with-swift-and-uikit/) post, that I followed."
category: swift
tags: [ios, animation, image, card, flip]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

I've implemented a card flip in javascript, jquery, angularjs but now that I've been learning swift, I've been wondering how it's done. If you've been wondering the same thing, you're in luck. This post will guide you through the code necessary to make a card and flip it in swift. I have to give credit to [this](http://www.codingricky.com/flipping-cards-with-swift-and-uikit/) post, that I followed.

<!-- Content -->
<h3>Content</h3>

<!-- Step 1 -->
<h4>Step 1</h4>

We first need to create the variables for the views.

<!-- Code _______________________________________-->
{% highlight swift linenos=table  %}
class ViewController: UIViewController {
    var cardView: UIView!
    var front: UIImageView!
    var back: UIImageView!
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->



<!-- Step 2 -->
<h4>Step 2</h4>

We then need to actually create the views.

<!-- Code _______________________________________-->
{% highlight swift linenos=table  %}
class ViewController: UIViewController {

    var cardView: UIView!
    var front: UIImageView!
    var back: UIImageView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        let width = self.view.frame.width * 0.8
        let height = self.view.frame.height * 0.8
        let rect = CGRectMake(0, 0, width, height)
        
        front = UIImageView(frame: rect)
        front.image = UIImage(named: "front")
        
        back = UIImageView(frame: rect)
        back.image = UIImage(named: "back")
        
        cardView = UIView(frame: rect)
        cardView.addSubview(back)
        self.view.addSubview(cardView)
    }
    
    override func viewWillLayoutSubviews() {
        cardView.center = view.center
    }
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

![Just a card]({{ ASSET_PATH }}images/2015-11-30-swift-flip-card1.png)



<!-- Step 3 -->
<h4>Step 3</h4>

We are displaying a card, but we need to flip it.

To do that, we add a UITapGestureRecognizer

<!-- Code _______________________________________-->
{% highlight swift linenos=table  %}
override func viewDidLoad() {
    super.viewDidLoad()
    
    let width = self.view.frame.width * 0.8
    let height = self.view.frame.height * 0.8
    let rect = CGRectMake(0, 0, width, height)
    
    let singleTap = UITapGestureRecognizer(target: self, action: Selector("tapped"))
    singleTap.numberOfTapsRequired = 1
    
    front = UIImageView(frame: rect)
    front.image = UIImage(named: "front")
    
    back = UIImageView(frame: rect)
    back.image = UIImage(named: "back")
    
    cardView = UIView(frame: rect)
    cardView.addGestureRecognizer(singleTap)
    cardView.userInteractionEnabled = true
    cardView.addSubview(back)
    self.view.addSubview(cardView)
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


We also need to create the tapped function. Which will use the `UIView.transitionFromView` method.

<!-- Code _______________________________________-->
{% highlight swift linenos=table  %}
func tapped() {
    var showingSide = front
    var hiddenSide = back
    if showingBack {
        (showingSide, hiddenSide) = (back, front)
    }
    
    UIView.transitionFromView(showingSide, 
            toView: hiddenSide,
            duration: 0.7,
            options: UIViewAnimationOptions.TransitionFlipFromRight,
            completion: nil)
    
    showingBack = !showingBack
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->




<!-- End Result -->
<h4>End Result</h4>

<!-- Code _______________________________________-->
{% highlight swift linenos=table  %}
class ViewController: UIViewController {

    var cardView: UIView!
    var front: UIImageView!
    var back: UIImageView!
    var showingBack = true
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        let width = self.view.frame.width * 0.8
        let height = self.view.frame.height * 0.8
        let rect = CGRectMake(0, 0, width, height)
        
        let singleTap = UITapGestureRecognizer(target: self, action: "tapped")
        singleTap.numberOfTapsRequired = 1
        
        front = UIImageView(frame: rect)
        front.image = UIImage(named: "front")
        
        back = UIImageView(frame: rect)
        back.image = UIImage(named: "back")
        
        cardView = UIView(frame: rect)
        cardView.addGestureRecognizer(singleTap)
        cardView.userInteractionEnabled = true
        cardView.addSubview(back)
        self.view.addSubview(cardView)
    }
    
    func tapped() {
        var showingSide = front
        var hiddenSide = back
        if showingBack {
            (showingSide, hiddenSide) = (back, front)
        }
        
        UIView.transitionFromView(showingSide, 
                toView: hiddenSide, 
                duration: 0.7,
                options: UIViewAnimationOptions.TransitionFlipFromRight,
                completion: nil)
        
        showingBack = !showingBack
    }
    
    override func viewWillLayoutSubviews() {
        cardView.center = view.center
    }
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


![End Result]({{ ASSET_PATH }}images/2015-11-30-swift-flip-card.gif)