---
layout: post
title: "Learn React-Native Part 2: NavigatorIOS"
description: "This is part 2 of me learning react-native. In this post, I will go over how to create a Navigation controller in react-native where it's called NavigatorIOS. If you haven't already, take a look at part 1 of this series."
category: javascript
tags: [ios, react-native, swift, xcode]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

This is part 2 of me learning react-native. In this post, I will go over how to create a Navigation controller in react-native where it's called NavigatorIOS. If you haven't already, take a look at part 1 of this series.

<!-- Content -->
<h3>Content</h3>

<!-- Step 1 -->
<h4>Step 1</h4>

We create a Nav component which has a NavigatorIOS as it's child view. The important part is the `initialRoute`. The `initialRoute` determines what is initially displayed. We will import `InitialView` which is the first thing we show.
We can now import `Nav` and use it as a child component.

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Component,
  NavigatorIOS
} = React;

var InitialView = require('./InitialView.ios');
var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

class Nav extends Component {
    onRightButtonPress: function() {
        this.refs.nav.push({
            title: 'Pressed RightButtonNextToTitleInInitialView',
            component: ForRightButtonPressedScene
        })
    },

    render() {
        return (
            <NavigatorIOS
                ref="nav"
                style={styles.container}
                rightButtonTitle: 'RightButtonNextToTitleInInitialView',
                onRightButtonPress: this.onRightButtonPress
                initialRoute={ {
                    title: 'InitialView',
                    component: InitialView,
                }} />
        );
    }
}

module.exports = Nav;
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

<!-- Step 2 -->
<h4>Step 2</h4>

Ok, we have our initial view, but how to do navigate to the next view? The `InitialView` component gets props passed in and inside those props, `NavigatorIOS` passes the navigator object. This object has push, pop and other methods which you can find out more [here](https://facebook.github.io/react-native/docs/navigatorios.html#content). Notice how we use `this.props` to navigate to the next view.

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Component
  TouchableHighlight,
  Text
} = React;

var IPressedTheTextView = require('./touchView.ios');
var styles = StyleSheet.create({
    scene: {
        padding: 10,
        paddingTop: 74,
        flex: 1,
        backgroundColor: 'red'
    },
});

class InitialView extends Component
    onPress() {
        this.props.navigator.push({
            title: 'IPressedTheTextView',
            component: IPressedTheTextView
        });
    },

    render() {
        return (
            <View style={styles.scene}>
                <TouchableHighlight onPress={this.onPress}>
                    <Text>This is the Initial View. Press to go to the IPressedTheTextView</Text>
                </TouchableHighlight>
            </View>
        );
    }
});

module.exports = InitialView;
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


The code above is very simple. Our initial view (what gets displayed first) has some text that you can press. When you press it, it takes you to `IPressedTheTextView`. Because this is the first view, we also have the button on the right called `RightButtonNextToTitleInInitialView`.