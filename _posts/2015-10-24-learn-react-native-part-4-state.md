---
layout: post
title: "Learn React Native Part 4: State"
description: ""
category: javascript
tags: [ios, react-native, react, swift, xcode, state]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

Normally in a UIKit control, you would modify the appearance of the control or replace the specified control with another control based on some business logic. In react-native, we display components. We can modify how the component is displayed based on it's state. Let's see how that works.

<!-- Content -->
<h3>Content</h3>

What do we use state for? Why should you know how to use it? Well a great example is the NagivatorIOS which is based on [UINavigationController](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UINavigationController_Class/). You can find out more about how to use the UINavigationController [here](https://developer.apple.com/library/prerelease/ios/referencelibrary/GettingStarted/DevelopiOSAppsSwift/Lesson8.html).

Let's see what such a component looks like in react-native.

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home'
        };
    }
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->