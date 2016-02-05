---
layout: post
title: "Swift: Swipe Cards"
description: "Ever wonder how to create swipe cards like on the chrome app, tinder and many other apps? Well so did I. After reading many amazing tutorials, I decided to make a simplified version for myself."
category: swift
tags: [ios, swift, swipe, animation]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

Ever wonder how to create swipe cards like on the chrome app, tinder and many other apps? Well so did I. After reading many amazing tutorials, I decided to make a simplified version for myself. Here's a list of the tutorials that inspired me.

- [IOS - Creating a cool Tinder like drag animations By Nimrod Gutman](http://guti.in/articles/creating-tinder-like-animations/)
- [How We Built Tinder-Like Koloda Animation in Swift By Eugene Andreyev](https://yalantis.com/blog/how-we-built-tinder-like-koloda-in-swift/)


<!-- Content -->
<h3>Content</h3>

There are 3 components that people seem to be using.

- DraggableCardView: card that displays content
- OverlayView: This is a dynamic view that is shown when people swipe to a side. (Think the Like, Dislike on tinder cards)
- DeckView: Loads the cards, shows them

Let's start off simple.

<!-- Code _______________________________________-->
 {% highlight swift linenos=table %}
 class ViewController: UIViewController {

    var cardView:UIView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.cardView = createCardView()
        self.view.addSubview(cardView)
    }
    
    override func viewWillLayoutSubviews() {
        cardView.center = self.view.center
    }

    func createCardView() -> UIView {
        let width = self.view.frame.width * 0.8
        let height = self.view.frame.height * 0.8
        let rect = CGRectMake(0, 0, width, height)
        
        let tempCardView = UIView(frame: rect)
        tempCardView.backgroundColor = UIColor.blueColor()
        tempCardView.layer.cornerRadius = 8;
        tempCardView.layer.shadowOffset = CGSizeMake(7, 7);
        tempCardView.layer.shadowRadius = 5;
        tempCardView.layer.shadowOpacity = 0.5;
        return tempCardView
    }
}
 {% endhighlight %}
 <!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^--> 

 ![Initial]({{ ASSET_PATH }}/../images/2015-12-03-swift-swipe-cards.png)

<!-- Step 1 -->
<h4>Step 1</h4>

We add a `UIPanGestureRecognizer` on line 9 and 10. The method `panGestureRecognized` on line 21 will handle what happens when the user tries to swipe.

<!-- Code _______________________________________-->
{% highlight swift linenos=table %}
class ViewController: UIViewController {

    var cardView:UIView!
    var panGestureRecognizer:UIPanGestureRecognizer!
    var originalPoint: CGPoint!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        panGestureRecognizer = UIPanGestureRecognizer(target: self, action: "panGestureRecognized:")
        self.view.addGestureRecognizer(panGestureRecognizer)
    
        self.cardView = createCardView()
        self.view.addSubview(cardView)
    }
    

    override func viewWillLayoutSubviews()
    
    func createCardView() -> UIView

    func panGestureRecognized(gestureRecognizer: UIPanGestureRecognizer) {
        let xDistance = gestureRecognizer.translationInView(self.view).x
        let yDistance = gestureRecognizer.translationInView(self.view).y
        
        switch gestureRecognizer.state {
        case .Began:
            self.originalPoint = self.view.center
            break
            
        case .Changed:
            updateCardViewWithDistances(xDistance, yDistance)
            break
            
        case .Ended:
            resetViewPositionAndTransformations()
            break
            
        default:
            break
        }
    }
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

We're missing `updateCardViewWithDistances` and `resetViewPositionAndTransformations`.


<!-- Step 2 -->
<h4>Step 2</h4>

The function `updateCardViewWithDistances` will update the rotation based on how far you drag the view.
It will also scale the view down for added effect.

<!-- Code _______________________________________-->
{% highlight swift linenos=table %}
func updateCardViewWithDistances(xDistance:CGFloat, _ yDistance:CGFloat) {
    let rotationStrength = min(xDistance / 320, 1)
    let fullCircle = (CGFloat)(2*M_PI)
    
    let rotationAngle:CGFloat = fullCircle * rotationStrength / 16
    let scaleStrength:CGFloat = (CGFloat) (1 - fabsf(Float(rotationStrength)) / 2)
    let scale = max(scaleStrength, 0.93)
    
    let newX = self.originalPoint.x + xDistance
    let newY = self.originalPoint.y + yDistance
    
    let transform = CGAffineTransformMakeRotation(rotationAngle)
    let scaleTransform = CGAffineTransformScale(transform, scale, scale)
    
    self.cardView.center = CGPointMake(newX, newY)
    self.cardView.transform = scaleTransform
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


<!-- Step 3 -->
<h4>Step 3</h4>

The function `resetViewPositionAndTransformations` will reset the center and transform back to normal.

<!-- Code _______________________________________-->
{% highlight swift linenos=table %}
func resetViewPositionAndTransformations() {
    UIView.animateWithDuration(0.2, animations: {
        self.cardView.center = self.originalPoint;
        self.cardView.transform = CGAffineTransformMakeRotation(0);
    })
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


<!-- Result -->
<h4>Result</h4>

 ![Swipe]({{ ASSET_PATH }}/../images/2015-12-03-swift-swipe-cards.gif)

<!-- Code _______________________________________-->
{% highlight swift linenos=table %}
class ViewController: UIViewController {

    var cardView:UIView!
    var panGestureRecognizer:UIPanGestureRecognizer!
    var originalPoint: CGPoint!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        panGestureRecognizer = UIPanGestureRecognizer(target: self, action: "panGestureRecognized:")
        self.view.addGestureRecognizer(panGestureRecognizer)
        
        self.cardView = createCardView()
        self.view.addSubview(cardView)
    }
    
    
    override func viewWillLayoutSubviews() {
        cardView.center = self.view.center
    }
    

    func createCardView() -> UIView {
        let width = self.view.frame.width * 0.5
        let height = self.view.frame.height * 0.5
        let rect = CGRectMake(0, 0, width, height)
        
        let tempCardView = UIView(frame: rect)
        tempCardView.backgroundColor = UIColor.blueColor()
        tempCardView.layer.cornerRadius = 8;
        tempCardView.layer.shadowOffset = CGSizeMake(7, 7);
        tempCardView.layer.shadowRadius = 5;
        tempCardView.layer.shadowOpacity = 0.5;
        return tempCardView
    }
    

    func panGestureRecognized(gestureRecognizer: UIPanGestureRecognizer) {
        let xDistance = gestureRecognizer.translationInView(self.view).x
        let yDistance = gestureRecognizer.translationInView(self.view).y
        
        switch gestureRecognizer.state {
        case .Began:
            self.originalPoint = self.view.center
            break
            
        case .Changed:
            updateCardViewWithDistances(xDistance, yDistance)
            break
            
        case .Ended:
            resetViewPositionAndTransformations()
            break
            
        default:
            break
        }
    }
    
    
    func updateCardViewWithDistances(xDistance:CGFloat, _ yDistance:CGFloat) {
        let rotationStrength = min(xDistance / 320, 1)
        let fullCircle = (CGFloat)(2*M_PI)
        
        let rotationAngle:CGFloat = fullCircle * rotationStrength / 16
        let scaleStrength:CGFloat = (CGFloat) (1 - fabsf(Float(rotationStrength)) / 2)
        let scale = max(scaleStrength, 0.93)
        
        let newX = self.originalPoint.x + xDistance
        let newY = self.originalPoint.y + yDistance
        
        let transform = CGAffineTransformMakeRotation(rotationAngle)
        let scaleTransform = CGAffineTransformScale(transform, scale, scale)
        
        self.cardView.center = CGPointMake(newX, newY)
        self.cardView.transform = scaleTransform
    }
    
    
    func resetViewPositionAndTransformations() {
        UIView.animateWithDuration(0.2, animations: {
            self.cardView.center = self.originalPoint;
            self.cardView.transform = CGAffineTransformMakeRotation(0);
        })
    }
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->