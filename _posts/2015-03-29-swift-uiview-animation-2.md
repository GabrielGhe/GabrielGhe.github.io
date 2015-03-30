---
layout: post
title: "Swift: UIView Animation 2"
description: ""
category: swift
tags: [ios, animation, uiview]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

This is part 2 of the animations post. In this post, we will look at how to add special animations to views. Like when you slide from the bottom of an iPhone and the menu appears with a small bounce.

<!-- Content -->
<h3>Content</h3>

Create a `UIDynamicAnimator`

<!-- Code _______________________________________-->
{% highlight swift linenos %}
var animator = UIDynamicAnimator(referenceView: UIView)
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


Add `UIDynamicBehavior`s to it (gravity, collisions etc.)

<!-- Code _______________________________________-->
{% highlight swift linenos %}
let gravity = UIGravityBehavior()
animator.addBehavior(gravity)
let collider = UICollisionBehavior()
animator.addBehavior(collider)
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


Add `UIDynamicItems` (usually UIViews) to the UIDynamicBehaviors.

<!-- Code _______________________________________-->
{% highlight swift linenos %}
let item1: UIDynamicItem = ... // usually a UIView
let item2: UIDynamicItem = ... // usually a UIView

gravity.addItem(item1)
collider.addItem(item1)
gravity.addItem(item2)
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

<!-- UIDynamicItem -->
<h3>UIDynamicItem</h3>

The `UIDynamicItem` protocol looks like this. `UIView` implements this protocol and if you change center or transform while the animator is running, you must call `this method in UIDynamicAnimator: `func updateItemUsingCurrentState(item: DynamicItem)`

<!-- Code _______________________________________-->
{% highlight swift linenos %}
protocol UIDynamicItem {
    var bounds: CGRect { get }
    var center: CGPoint { get set }
    var transform: CGAffineTransform { get set }
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


<!-- UIGravityBehavior -->
<h3>UIGravityBehavior</h3>

<!-- Code _______________________________________-->
{% highlight swift linenos %}
var angle: CGFloat      // in radians; 0 is to the right; positive numbers are counter-clockwise
var magniture: CGFloat  // 1.0 is 1000 points/s/s
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

<!-- UIAttachmentBehavior -->
<h3>UIAttachmentBehavior</h3>

<!-- Code _______________________________________-->
{% highlight swift linenos %}
init(item: UIDynamicItem, attachedToAnchor: CGPoint)
init(item: UIDynamicItem, attachedToItem: UIDynamicItem)
init(item: UIDynamicItem, offsetFromCenter: CGPoint, attachedToItem/Anchor...)
var length: CGFloat
var anchorPoint: CGPoint
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


<!-- UICollisionBehavior -->
<h3>UICollisionBehavior</h3>

<!-- Code _______________________________________-->
{% highlight swift linenos %}
var collisionMode: UICollisionBehaviorMode // .Items, .Boundaries, .Everything
// with .Items, any items you add to a UICollisionBehavior will bounce off of each other
// with .Boundaries, then you add UIBezierPath boundaries for items to bounce off of

func addBoundaryWithIdentifier(identifier: NSCopying, forPath: UIBezierPath)
func removeBoundaryWithIdentifier(identifier: NSCopying)
var translatesReferenceBoundsIntoBoundary: Bool // referencesView's edges
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


<!-- Example -->
<h3>Example</h3>

<!-- Code _______________________________________-->
{% highlight swift linenos %}
class DropBlockViewController: UIViewController {
    @IBOutlet weak var gameView: UIView!
    var dropsPerRow = 10
    var dropSize: CGSize {
        let size = gameView.bounds.size.width / CGFloat(dropsPerRow)
        return CGSize(width:size, height:size)
    }
    let gravity = UIGravityBehavior()
    lazy var collider: UICollisionBehavior {
       let lazyCollider = UICollisionBehavior() 
       lazyCollider.translateReferenceBoundsIntoBoundary = true
       return lazyCollider
    }()
    lazy var animator: UIDynamicAnimator = {
        // set to gameView in viewDidLoad because it has to set Outlet
        return UIDynamicAnimator(referenceView: self.gameView)
    }()
    
    @IBAction func drop(sender: UITapGestureRecognizer) {
        drop()
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        animator.addBehavior(gravity)
        animator.addBehavior(collider)
    }
    
    func drop() {
        var frame = CGRect(origin: CGPointZero, size:dropSize)
        frame.origin.x = CGFloat.random(dropsPerRow) * dropSize.width
        
        let dropView = UIView(frame:frame)
        dropView.backgroundColor = UIColor.random
        
        gameView.addSubView(dropView)
        gravity.addItem(dropView)
        collider.addItem(dropView)
    }
}

private extension CGFloat {
    static func random(max: Int) -> CGFloat {
        return CGfloat(arc4random() % UInt32(max))
    }
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->
