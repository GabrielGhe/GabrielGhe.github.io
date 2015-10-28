---
layout: post
title: "Learn React Part 7: using Node and Socket.io"
description: "This is Part 2 of my using Node and React series. We're going to continue where we left off in [Part 1](/javascript/2015/02/13/learn-react-part-6-using-node/)."
category: javascript
tags: [react, nodejs, browserify, reactify, watchify, less, express, socketio]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

This is Part 2 of my using Node and React series. We're going to continue where we left off in [Part 1](/javascript/2015/02/13/learn-react-part-6-using-node/).


<!-- Code -->
{% highlight bash linenos %}
.
├── app.js
├── client.js
├── components
│   ├── MyApp.react.js
│   ├── MyAppList.react.js
│   └── MyAppListItem.react.js
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   │   └── build.min.js
│   └── stylesheets
│       ├── style.css
│       └── style.less
├── routes
│   ├── index.js
│   └── socketHandler.js
└── views
    └── index.ejs
{% endhighlight %}
<!-- /Code -->


<br /><br />
<h4>Socket.io</h4>

The first thing we need to do is add the `socket.io` library in our client.

<!-- Code -->
{% highlight html linenos %}
<!-- in ./views/index.ejs -->
<script src="https://cdn.socket.io/socket.io-1.1.0.js"></script>
{% endhighlight %}
<!-- /Code -->

Now on the server side we're going to setup `socket.io`.

<!-- Code -->
{% highlight javascript linenos %}
/* in ./app.js */

// at the end of the file
var io = require('socket.io').listen(server);
require('./routes/socketHandler')(io);
{% endhighlight %}
<!-- /Code -->


Now we have to write how socket.io handles messages.


<!-- Code -->
{% highlight javascript linenos %}
/* in ./routes/socketHandler.js */
"use strict";

module.exports = function(io){
  io.on('connection', function(socket){
    
    // send to everyone except for socket
    console.log('user connected ' + socket.id);
    socket.broadcast.emit('message', 'user connected ' + socket.id);

    // Disconnect
    socket.on('disconnect', function(){
      console.log('user disconnected ' + socket.id);
      socket.broadcast.emit('message', 'user disconnected ' + socket.id);
      // send to everone including socket
      // socket.emit('message', 'user disconnected ' + socket.id);
    });

    // Message event
    socket.on('message', function(msg){
      socket.emit('message',msg);
    });

  });// end connection
};
{% endhighlight %}
<!-- /Code -->

At the end, we'll have 3 react components: MyApp, MyAppList and MyAppListItem. This is the end result.

<br /><br />
<h4>
  <b>MyApp</b>
</h4>

We have to add 2 methods:

`componentDidMount` - the component has finished rendering

`getInitialState` - as the name implies, it returns the initial state

<!-- Code -->
{% highlight javascript linenos %}
/** @jsx React.DOM */

var React = require('react');
var MyAppList = require('./MyAppList.react');

module.exports = MyApp = React.createClass({
  getInitialState: function(){
    return {
      messages: []
    };
  },
  componentDidMount: function(){
    var self = this;
    var socket = io.connect();
    socket.on('message', function(msg){
      var messages = self.state.messages;
      messages.push(msg);
      self.setState(messages);
    });
  },
  render: function(){
    return (
      <MyAppList messages={this.state.messages} />
    )
  }
});
{% endhighlight %}
<!-- /Code -->

<h4>
  <b>MyAppList</b>
</h4>

<!-- Code -->
{% highlight javascript linenos %}
/** @jsx React.DOM */

var React = require('react');
var MyAppListItem = require('./MyAppListItem.react');

module.exports = MyAppList = React.createClass({
  render: function(){
    var listItems = this.props.messages.map(function(item){
      return (<MyAppListItem message={item} />);
    });

    return (
      <ul>
        {listItems}
      </ul>
    )
  }// render
});// MyAppList
{% endhighlight %}
<!-- /Code -->

<h4>
  <b>MyAppListItem</b>
</h4>

<!-- Code -->
{% highlight javascript linenos %}
/** @jsx React.DOM */

var React = require('react');

module.exports = MyAppListItem = React.createClass({
  render: function(){
      return (
        <li>{this.props.message}</li>
      )
  }
});
{% endhighlight %}
<!-- /Code -->