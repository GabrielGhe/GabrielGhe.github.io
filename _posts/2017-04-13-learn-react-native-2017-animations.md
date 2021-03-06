---
layout: post
title: "Learn React Native 2017: Animations"
description: "
I've been working on my app for a while now and I've decided to use react-native because I want to speed up the development and also learn a cool new tool for creating apps. I've been learning about how to animate views in react native and I want to share my findings with you.
"
category: javascript
tags: [react, react-native, ios]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

{{ page.description }}

<!-- Content -->
<h3>Content</h3>


<h4>Result</h4>

We're going to build a button that will load a progress bar if we long press.

![Press and hold]({{ ASSET_PATH }}/../images/2017-04-13-learn-react-native-2017-animations1.gif)



<h4>Explanation</h4>

We start, as usual, by importing components from react and react-native.
We also need a variable called `ACTION_TIMER` to determine how long we have to hold the button and another variable called `COLORS` which we'll use to determine the start and end colors for the progress bar.

<!-- Code _______________________________________-->
{% highlight javascript linenos=table %}
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback
} from 'react-native';

var ACTION_TIMER = 200;
var COLORS = ['rgb(255,255,255)', 'rgb(111,235,62)']
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


Next we'll create the skeleton of the class which will display the button. No fancy animations yet, just the button.

<!-- Code _______________________________________-->
{% highlight javascript linenos=table %}
class AnimatedButton extends Component {
    constructor() {
        super();
        this.state = {
            textComplete: '',
            buttonWidth: 0,
            buttonHeight: 0
        }
    }
  
    render(): ReactElement {
        return (
            <View>
                <TouchableWithoutFeedback>
                    <View style={styles.button} >
                        <Animated.View style={styles.animatedFill} />
                        <Text style={styles.text}>Press And Hold Me</Text>
                    </View>
                </TouchableWithoutFeedback>
        
                <View>
                    <Text>{this.state.textComplete}</Text>
                </View>
            </View>
        )
    }
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


We also need the style.

<!-- Code _______________________________________-->
{% highlight javascript linenos=table %}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        padding: 10,
        borderWidth: 3,
        borderColor: '#111'
    },
    text: {
        backgroundColor: 'transparent',
        color: '#111'
    },
    animatedFill: {
        position: 'absolute',
        top: 0,
        left: 0
    }
});
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


This is what we have so far.

![First Step]({{ ASSET_PATH }}/../images/2017-04-13-learn-react-native-2017-animations.png)


Now the fun part. Let's add animations. In `AnimatedButton`, change the constructor and add a new componentDidMount function.

<!-- Code _______________________________________-->
{% highlight javascript linenos=table %}
constructor() {
    super();
    this.state = {
        textComplete: '',
        pressAction: new Animated.Value(0),
        buttonWidth: 0,
        buttonHeight: 0
    }
}
  
componentDidMount() {
    this._value = 0;
    this.state.pressAction.addListener(
        (v) => this._value = v.value
    );
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


Here are the event handlers. `handlePressIn` will animate when the user holds the button and `handlePressOut` will handle when the user lets go.

<!-- Code _______________________________________-->
{% highlight javascript linenos=table %}
handlePressIn() {
    Animated.timing(this.state.pressAction, {
        duration: ACTION_TIMER,
        toValue: 1
    }).start(this.animationActionComplete);
}

handlePressOut() {
    Animated.timing(this.state.pressAction, {
        duration: this._value * ACTION_TIMER,
        toValue: 0
    }).start();
}

animationActionComplete() {
    var message = '';
    if (this._value === 1) {
        message = 'You held it long enough!';
    }
    this.setState({ textComplete: message });
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

We now need to add the event handlers to our render function.

<!-- Code _______________________________________-->
{% highlight javascript linenos=table %}
render(): ReactElement {
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback 
                onPressIn={this.handlePressIn} 
                onPressOut={this.handlePressOut}
            >
                <View style={styles.button} >
                    <Animated.View style={styles.bgFill} />
                    <Text style={styles.text}>Press And Hold Me</Text>
                </View>
            </TouchableWithoutFeedback>
            
            <View>
                <Text>{this.state.textComplete}</Text>
            </View>
        </View>
    );
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


We need to know the width and height of the button, so we'll get them at runtime.

<!-- Code _______________________________________-->
{% highlight javascript linenos=table %}
getButtonWidthLayout(e) {
    this.setState({
        buttonWidth: e.nativeEvent.layout.width - 6,
        buttonHeight: e.nativeEvent.layout.height - 6
    });
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


Now we need to animate when the button is clicked. We do this using styles.

<!-- Code _______________________________________-->
{% highlight javascript linenos=table %}
getProgressStyles() {
    var width = this.state.pressAction.interpolate({
        inputRange: [0, 1],
        outputRange: [0, this.state.buttonWidth]
    });
    var animatedColor = this.state.pressAction.interpolate({
        inputRange: [0, 1],
        outputRange: COLORS
    });

    return {
        width: width,
        height: this.state.buttonHeight,
        backgroundColor: animatedColor
    }
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


The final render function will look like this.

<!-- Code _______________________________________-->
{% highlight javascript linenos=table %}
render(): ReactElement {
    return (
      <View style={styles.container}>     
            <TouchableWithoutFeedback 
                onPressIn={this.handlePressIn.bind(this)} 
                onPressOut={this.handlePressOut.bind(this)}
            >
                <View style={styles.button} 
                onLayout={this.getButtonWidthLayout.bind(this)}>

                    <Animated.View style={[
                      styles.animatedFill,
                      this.getProgressStyles()]} />
                    
                    <Text style={styles.text}>Press And Hold Me</Text>

                </View>
            </TouchableWithoutFeedback>

            <View>
                <Text>{this.state.textComplete}</Text>
            </View>
       </View>
    );
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


<h4>Code</h4>

<!-- Code _______________________________________-->
{% highlight javascript linenos=table %}
// ----------------------------------
// IMPORTS
// ----------------------------------

import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback
} from 'react-native';

var ACTION_TIMER = 2;
var COLORS = ['rgb(255,255,255)', 'rgb(111,235,62)']

// ----------------------------------
// CLASSES
// ----------------------------------

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AnimatedButton />
      </View>
    );
  }
}

class AnimatedButton extends Component {
  constructor() {
    super();
    this.state = {
      textComplete: '',
      pressAction: new Animated.Value(0)
    }
  }
  
  componentDidMount() {
    this._value = 0;
    this.state.pressAction.addListener(
      (v) => this._value = v.value
    );
  }
  
  handlePressIn() {
    Animated.timing(this.state.pressAction, {
      duration: ACTION_TIMER,
      toValue: 11
    }).start(this.animationActionComplete.bind(this));
  }
  
  handlePressOut() {
    Animated.timing(this.state.pressAction, {
      duration: this._value * ACTION_TIMER
    }).start();
  }
  
  animationActionComplete() {
    var message = '';
    if (this._value === 1) {
      message = 'You held it long enough!';
    }
    this.setState({ textComplete: message });
  }
  
  getButtonWidthLayout(e) {
    this.setState({
        buttonWidth: e.nativeEvent.layout.width - 6,
        buttonHeight: e.nativeEvent.layout.height - 6
    });
  }
  
  getProgressStyles() {
    var width = this.state.pressAction.interpolate({
        inputRange: [0, 1],
        outputRange: [0, this.state.buttonWidth]
    });
    var animatedColor = this.state.pressAction.interpolate({
        inputRange: [0, 1],
        outputRange: COLORS
    });

    return {
        width: width,
        height: this.state.buttonHeight,
        backgroundColor: animatedColor
    }
  }
  
  render(): ReactElement {
    return (
      <View style={styles.container}>
            <TouchableWithoutFeedback 
                onPressIn={this.handlePressIn.bind(this)} 
                onPressOut={this.handlePressOut.bind(this)}
            >
                <View style={styles.button} 
                onLayout={this.getButtonWidthLayout.bind(this)}>
                    <Animated.View style={[
                      styles.animatedFill,
                      this.getProgressStyles()]} />
                    <Text style={styles.text}>Press And Hold Me</Text>
                </View>
            </TouchableWithoutFeedback>
            <View>
                <Text>{this.state.textComplete}</Text>
            </View>
       </View>
    );
  }
}


// ----------------------------------
// STYLES
// ----------------------------------

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    padding: 10,
    borderWidth: 3,
    borderColor: '#111'
  },
  text: {
    backgroundColor: 'transparent',
    color: '#111'
  },
  animatedFill: {
    position: 'absolute',
    top: 0,
    left: 0
  }
});

{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->




<!-- References -->
<h3>References</h3>

- [browniefed](http://browniefed.com/blog/react-native-press-and-hold-button-actions/)


<br /><br /><br />