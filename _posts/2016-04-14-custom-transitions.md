---
layout: post
title: "Custom Transitions"
description: "
One of the coolest things about a beautiful UI/UX is the transitions. When I started out in web, I used to find interesting animations in javascript and css and try to recreate it. I feel the same about mobile. Transitions between views is very important and can distinguish your app from the millions of others. Make sure to check out [jTribe's post](http://blog.jtribe.com.au/custom-animations-transitions/) as it contains everything from this post and more. 
"
category: swift
tags: [ios, animation, transition, navigation]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

{{ page.description }}

<!-- Content -->
<h3>Content</h3>

We're going to create two classes: CustomInteraction and CustomPresentation.
In XCode go to `File -> New -> File -> Source -> Swift file`.

<!-- CustomInteraction -->
<h4>CustomInteraction</h4>

<!-- TODO: description of what CustomInteraction does -->

<!-- Code _______________________________________-->
{% highlight swift linenos=table %}
import UIKit

class CustomInteraction: UIPercentDrivenInteractiveTransition {
    var navigationController: UINavigationController?
    var shouldCompleteTransition = false
    var transitionInProgress = false

    override init() {}
    
    func attachToViewController(viewController: UIViewController) {}
    
    private func initializeGestureRecognizer(view: UIView) {}
    
    func handlePan(gestureRecognizer: UIGestureRecognizer) {}

    func handlePan(gestureRecognizer: UIPanGestureRecognizer) {}

    func handlePanBegan(location: CGPoint) {}
    
    func handlePanChanged(viewTranslation: CGPoint) {}
    
    func handlePanCancelled(gestureRecognizer: UIPanGestureRecognizer) {}
}

enum PercentageValues: CGFloat {
    case Threshold = 50.0
    case Half = 0.50
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->



Here's the breakdown of each method.

- `attachToViewController`: Attaches the `CustomInteraction` to an `UIViewController`. Usually, this is the top view (NavigationController) so that you only need to attach it once.

- `initializeGestureRecognizer`: This overrides the default UIPanRecognizer from Apple which lets you swipe to the left instead of pressing the back button.



Now let's add all the rest of the code for this class.

<!-- Code _______________________________________-->
{% highlight swift linenos=table %}
mport UIKit

class CustomInteraction: UIPercentDrivenInteractiveTransition {
    
    var navigationController: UINavigationController?
    var shouldCompleteTransition = false
    var transitionInProgress = false
    
    override init() {
        super.init()
        completionSpeed = 1 - percentComplete
    }
    
    
    func attachToViewController(viewController: UIViewController) {
        navigationController = viewController.navigationController
        initializeGestureRecognizer(viewController.view)
    }
    

    private func initializeGestureRecognizer(view: UIView) {
        view.addGestureRecognizer(UIPanGestureRecognizer(target: self, action: "handlePan:"))
    }
    
    
    func handlePan(gestureRecognizer: UIPanGestureRecognizer) {
        guard let gestureSuperview = gestureRecognizer.view?.superview else { return }
        let viewTranslation = gestureRecognizer.translationInView(gestureSuperview)
        let location = gestureRecognizer.locationInView(gestureSuperview)
        
        switch gestureRecognizer.state {
        case .Began:
            handlePanBegan(location)
        case .Changed:
            handlePanChanged(viewTranslation)
        case .Cancelled, .Ended:
            handlePanCancelled(gestureRecognizer)
        default:
            break
        }
    }
    
    
    func handlePanBegan(location: CGPoint) {
        if location.x > PercentageValues.Threshold.rawValue {
            cancelInteractiveTransition()
            return
        }
        transitionInProgress = true
        navigationController?.popViewControllerAnimated(true)
    }
    
    
    func handlePanChanged(viewTranslation: CGPoint) {
        // xValueReached has to be [0.0, 1.0]
        let xValueReached = CGFloat(fminf(fmaxf(Float(viewTranslation.x / 200.0), 0.0), 1.0))
        shouldCompleteTransition = xValueReached > PercentageValues.Half.rawValue
        updateInteractiveTransition(xValueReached)
    }
    
    
    func handlePanCancelled(gestureRecognizer: UIPanGestureRecognizer) {
        transitionInProgress = false
        if !shouldCompleteTransition || gestureRecognizer.state == .Cancelled {
            cancelInteractiveTransition()
        } else {
            finishInteractiveTransition()
        }
    }
}

enum PercentageValues: CGFloat {
    case Threshold = 50.0
    case Half = 0.50
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->



<!-- CustomPresentation -->
<h4>CustomPresentation</h4>

<!-- TODO: description of what CustomInteraction does -->

<!-- Code _______________________________________-->
{% highlight swift linenos=table %}
import UIKit
import Foundation

class CustomPresentation: NSObject, UIViewControllerAnimatedTransitioning {
    
    private let scale = UIScreen.mainScreen().scale
    private let identity = CATransform3DIdentity
    private var distance: CGFloat {
        return ZPositions.Distance.rawValue
    }
    private var spatial: CGFloat {
        return ZPositions.Spatial.rawValue
    }
    var reverse: Bool = false
    
    func transitionDuration(transitionContext: UIViewControllerContextTransitioning?) 
      -> NSTimeInterval {}

    func handleAnimationFinish(transitionContext: UIViewControllerContextTransitioning, 
      toView: UIView, fromView: UIView) {}
    
    func animateTransition(transitionContext: UIViewControllerContextTransitioning) {}
    
    func rasterize(withLayer layer: CALayer) {}
    
    func addDepthDownToAnimation() -> CATransform3D {}
    
    func addDepthDownFromAnimation() -> CATransform3D {}
}
enum ZPositions: CGFloat {
    case Spatial = 300
    case Distance = 150
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->



Here's the breakdown of each method.

- `transitionDuration`: How long the transition will take.

- `animateTransition`: What the animation will be. (most of the code is here)

- `rasterize`: Makes the animation display match the resolution of the device.

- `addDepthDownToAnimation`: This is where the transition happens, it actually uses the Z-axis to animate and adds depth. Without this, you wouldn't see the animation.



Now let's add all the rest of the code for this class.

<!-- Code _______________________________________-->
{% highlight swift linenos=table %}
import UIKit
import Foundation

class CustomPresentation: NSObject, UIViewControllerAnimatedTransitioning {
    
    private let scale = UIScreen.mainScreen().scale
    private let identity = CATransform3DIdentity
    private var distance: CGFloat {
        return ZPositions.Distance.rawValue
    }
    private var spatial: CGFloat {
        return ZPositions.Spatial.rawValue
    }
    var reverse: Bool = false
    
    
    func transitionDuration(transitionContext: UIViewControllerContextTransitioning?)
        -> NSTimeInterval {
        return 2.0
    }
    
    
    func handleAnimationFinish(transitionContext: UIViewControllerContextTransitioning,
                               toView: UIView,
                               fromView: UIView) {
        if transitionContext.transitionWasCancelled() {
            toView.removeFromSuperview()
            toView.layer.removeAllAnimations()
        } else {
            fromView.removeFromSuperview()
            fromView.layer.removeAllAnimations()
        }
        transitionContext.completeTransition(!transitionContext.transitionWasCancelled())
    }
    
    
    func animateTransition(transitionContext: UIViewControllerContextTransitioning) {
        let containerView = transitionContext.containerView()
        let toViewController = transitionContext
          .viewControllerForKey(UITransitionContextToViewControllerKey)!
        let fromViewController = transitionContext
          .viewControllerForKey(UITransitionContextFromViewControllerKey)!
        let toView = toViewController.view
        let fromView = fromViewController.view
        
        // add animation to view
        toView.layer.transform = addDepthDownToAnimation()
        
        // initially hide view and rasterize
        toView.alpha = 0.0
        rasterize(withLayer: toView.layer)
        
        // add both subviews and show only one of them depending on reverse
        containerView?.addSubview(toView)
        containerView?.addSubview(fromView)
        containerView?.sendSubviewToBack(reverse == true ? fromView : toView)
        
        // change zPosition depending on which view should be displayed
        fromView.layer.zPosition = reverse ? -spatial : spatial
        toView.layer.zPosition = reverse ? spatial : -spatial
        
        UIView.animateWithDuration(transitionDuration(transitionContext),
                                   delay: 0.0,
                                   options: .CurveEaseOut,
                                   animations: { [weak self] in
            guard let weakSelf = self else { return }
            
            // add animation
            fromView.layer.transform = weakSelf.addDepthDownFromAnimation()
            
            // initially hide view and rasterize
            fromView.alpha = 0.0
            weakSelf.rasterize(withLayer: fromView.layer)
            
            // reset transform
            toView.layer.transform = CATransform3DIdentity
            toView.alpha = 1.0
            
        }, completion: { finished in
            self.handleAnimationFinish(transitionContext,
                toView:toView,
                fromView:fromView)
        })
    }
    
    
    func rasterize(withLayer layer: CALayer) {
        layer.contentsScale = scale
        layer.shouldRasterize = true
        layer.rasterizationScale = scale
    }
    
    
    func addDepthDownToAnimation() -> CATransform3D {
        let toViewZ: CGFloat = reverse ? distance : -distance
        
        var rotationAndPerspectiveTransform: CATransform3D = CATransform3DIdentity
        rotationAndPerspectiveTransform.m34 = 1.0 / -500.0
        rotationAndPerspectiveTransform = CATransform3DTranslate(
            rotationAndPerspectiveTransform, 0.0, 0.0, toViewZ)
        return rotationAndPerspectiveTransform
    }
    
    
    func addDepthDownFromAnimation() -> CATransform3D {
        let fromViewZ: CGFloat = reverse ? -distance : distance
        
        var rotationAndPerspectiveTransform: CATransform3D = CATransform3DIdentity
        rotationAndPerspectiveTransform.m34 = 1.0 / -500.0
        rotationAndPerspectiveTransform = CATransform3DTranslate(
            rotationAndPerspectiveTransform, 0.0, 0.0, fromViewZ)
        return rotationAndPerspectiveTransform
    }
}
enum ZPositions: CGFloat {
    case Spatial = 300
    case Distance = 150
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


<!-- References -->
<h3>References</h3>

- [jTribe Blog's custom animation transition post](http://blog.jtribe.com.au/custom-animations-transitions/)
- [Apple docs' UIPercentDrivenInteractiveTransition](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIPercentDrivenInteractiveTransition_class/)
- [Apple docs' UIViewControllerAnimatedTransitioning](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIViewControllerAnimatedTransitioning_Protocol/)
- [RayWenderlich's UIGestureRecognizer post](https://www.raywenderlich.com/76020/using-uigesturerecognizer-with-swift-tutorial)
