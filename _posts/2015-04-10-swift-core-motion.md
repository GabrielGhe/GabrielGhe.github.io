---
layout: post
title: "Swift: Core Motion"
description: "Many apple mobile devices have motion APIs. There are many APIs and they all use the `CMMotionManager` class. Usually you only have 1 instance of this class in a high level area like the AppDelegate. You can get more information about Core Motion [here](https://developer.apple.com/library/ios/documentation/CoreMotion/Reference/CMMotionManager_Class/)."
category: swift
tags: [ios, motion, accelerometer, gyro]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

Many apple mobile devices have motion APIs. There are many APIs and they all use the `CMMotionManager` class. Usually you only have 1 instance of this class in a high level area like the AppDelegate. You can get more information about Core Motion [here](https://developer.apple.com/library/ios/documentation/CoreMotion/Reference/CMMotionManager_Class/).


<!-- Content -->
<h3>Content</h3>

Check availability first. deviceMotion checks for all others.

<!-- Code _______________________________________-->
{% highlight swift linenos=table  %}
import CoreMotion
var motionManager = CMMotionManager()

var isCoreMotionAvailable = motionManager.accelerometerAvailable
isCoreMotionAvailable = motionManager.gyroAvailable
isCoreMotionAvailable = motionManager.magnetometerAvailable
isCoreMotionAvailable = motionManager.deviceMotionAvailable
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

Is the hardware active?

<!-- Code _______________________________________-->
{% highlight swift linenos=table  %}
var motionManager = CMMotionManager()

var isHardwareActive = motionManager.accelerometerActive
isHardwareActive = motionManager.gyroActive
isHardwareActive = motionManager.magnetometerActive
isHardwareActive = motionManager.deviceMotionActive
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

The hardware is on, start looking for updates.

<!-- Code _______________________________________-->
{% highlight swift linenos=table  %}
var motionManager = CMMotionManager()

motionManager.startAccelerometerUpdatesToQueue(queue: NSOperationQueue(), withHandler: {
    (accelerometerData, error) in
    // do stuff
})

/*
startGyroUpdatesToQueue()
startMagnetometerUpdatesToQueue()
startDeviceMotionUpdatesToQueue()
*/
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

Stop looking for updates.

<!-- Code _______________________________________-->
{% highlight swift linenos=table  %}
var motionManager = CMMotionManager()

motionManager.stopAccelerometerUpdates()
motionManager.stopGyroUpdates()
motionManager.stopMagnetometerUpdates()
motionManager.stopDeviceMotionUpdates()
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->