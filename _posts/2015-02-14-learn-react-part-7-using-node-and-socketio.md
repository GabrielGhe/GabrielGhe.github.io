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

<!-- Code -->
{% highlight html linenos %}
<!-- in ./views/index.ejs -->
<script src="https://cdn.socket.io/socket.io-1.1.0.js"></script>
{% endhighlight %}
<!-- /Code -->

In `./components/MyApp.react.js`, we're going to add 2 methods: componentDidMount and getInitialState.


componentDidMount - the component has finished rendering

getInitialState - as the name implies, it returns the initial state


<!-- Code -->
{% highlight javascript linenos %}
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
    messages.append(msg);
    self.setState(messages);
  });
}
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