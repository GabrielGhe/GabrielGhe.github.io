---
layout: post
title: "Learn Node Part 11: Basic React"
description: "I've heard some nice things about Facebook's ReactJS Framework. So here's how to setup React with Node. You can find more information [here](https://github.com/GabrielGhe/NodePractice/tree/master/Server18React).g"
category: javascript
tags: [nodejs, express, react, bower]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

I've heard some nice things about Facebook's ReactJS Framework. So here's how to setup React with Node. You can find more information [here](https://github.com/GabrielGhe/NodePractice/tree/master/Server18React).

<!-- Code _______________________________________-->
{% highlight bash linenos %}
### in shell ###

# look at my bower tutorial on how to setup bower
$ npm install --save bower

$ npm install --save express-jsx
$ bower install --save react
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

React's syntax is really verbose, so they use [JSX](http://facebook.github.io/react/docs/jsx-in-depth.html). Manually compiling jsx is a pain so we're going to use express-jsx which compiles the jsx in real time. Lets start.

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
// ### in app.js ###

// add near the top
var jsxCompile = require('express-jsx');

// order is important
app.use(jsxCompile(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

Now we're going to modify the ejs file and make it use react.

<!-- Code _______________________________________-->
{% highlight html linenos %}
<!-- ### in index.ejs ### -->

<div id="test"></div>

<script type="text/javascript" src="bower_components/react/react.min.js"></script>
<script src="javascripts/test.js"></script>
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

Remember that when test.js is requested, express-jsx middleware will look for a matching .jsx file. This means we need a test.jsx file.

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
// ### in test.jsx ###

/** @jsx React.DOM */
"use strict"

React.renderComponent(
  <h1>I am printing the title from react, works!</h1>,
  document.getElementById('test')
);
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->
