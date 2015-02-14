---
layout: post
title: "Learn React Part 7: using Node and Socket.io"
description: ""
category: javascript
tags: [react, nodejs, browserify, reactify, watchify, less, express, socketio]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

This is Part 2 of my using Node and React series. We're going to continue where we left off in [Part 1](/javascript/2015/02/13/learn-react-part-6-using-node/).

<br /><br />
<h4>Socket.io</h4>

The first thing we need to do is add the `socket.io` library in our client.

{% highlight html linenos %}
<!-- in ./views/index.ejs -->
<script src="https://cdn.socket.io/socket.io-1.1.0.js"></script>
{% endhighlight %}

