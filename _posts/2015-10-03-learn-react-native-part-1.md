---
layout: post
title: "Learn React-Native Part 1: Adding icons"
description: "This is part 1 of me learning react-native. These are the steps necessary to build an iOS react-native app."
category: javascript
tags: [ios, react-native, react, swift, xcode, icons]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

This is part 1 of me learning react-native. These are the steps necessary to build an iOS react-native app.

<!-- Content -->
<h3>Content</h3>

<!-- Step 1 -->
<h4>Step 1</h4>

<!-- Code _______________________________________-->
{% highlight bash linenos %}
$ npm install -g react-native-cli
$ react-native init AwesomeProject
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

<!-- Step 2 -->
<h4>Step 2</h4>

Open the xcode project in `AwesomeProject/ios` folder.

<!-- Step 3 -->
<h4>Step 3</h4>

We download the icons npm module and link it to xcode.

You can see the [font repo here](https://github.com/oblador/react-native-vector-icons) and learn more about adding library's to react-native from [facebook's post](http://facebook.github.io/react-native/docs/linking-libraries-ios.html#content)


<!-- Code _______________________________________-->
{% highlight bash linenos %}
$ npm install --save react-native-vector-icons
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


<!-- Code _______________________________________-->
{% highlight javascript linenos %}
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Component,
  TabBarIOS
} = React;

var Home = require('./home.ios');
var More = require('./more.ios');
var Icon = require('react-native-vector-icons/Ionicons');

class ReactNative1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
        };
    }

    render() {
        return (
            <TabBarIOS
              selectedTab={this.state.selectedTab}>
                  <Icon.TabBarItem
                    title="Home"
                    iconName="ios-home-outline"
                    selectedIconName="ios-home"
                    selected={this.state.selectedTab === 'home'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'home',
                        });
                    }}>
                      <Home />
                  </Icon.TabBarItem>

                  <Icon.TabBarItem
                    title="Person"
                    iconName="person"
                    selectedIconName="person"
                    selected={this.state.selectedTab === 'more'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'more',
                        });
                    }}>
                      <More />
                  </Icon.TabBarItem>
            </TabBarIOS>
        );
    }
}

AppRegistry.registerComponent('ReactNative1', () => ReactNative1);
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->