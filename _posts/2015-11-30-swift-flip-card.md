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
{% highlight swift linenos %}
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
{% highlight swift linenos %}
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