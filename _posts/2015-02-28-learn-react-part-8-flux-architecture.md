---
layout: post
title: "Learn React Part 8: Flux Architecture"
description: ""
category: javascript
tags: [reactjs, flux]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

Flux is a type of web application architecture that plays nicely with React's unidirectional data flow. You can find all the information from this post and a lot more in the [Full Stack Flux](https://www.youtube.com/watch?v=KtmjkCuV-EU) video and the [HTMLDevConf React Flux](https://www.youtube.com/watch?v=Bic_sFiaNDI) video. The images are from both those videos, the creators own all the rights to them.

<br />
<h3>Old way</h3>

Let's take the facebook chat as the example. If we wanted to get the number of unread messages for each thread (unread messages per person).

![Chat Notification]({{ ASSET_PATH }}images/2015-02-28-learn-react-part-8-flux-architecture2.png)

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
var unreadMessageCounts = {};
function onNewMessage(msg){
    // increment the old count and cache the new count
    var unreadCount = ++unreadMessageCounts[msg.threadId];
    // update DOM
    $('#messageCount' + msg.threadId).text(unreadCount);
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

This is nice and all, but what happens if we want to know how many threads have unread messages (number of conversations that have unread messages)? We would have to update our code.

![Structure]({{ ASSET_PATH }}images/2015-02-28-learn-react-part-8-flux-architecture.png)

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
var unreadMessageCounts = {};
var unreadThreadCount = 0;

function onNewMessage(msg){
    // increment the old count and cache the new count
    var unreadCount = ++unreadMessageCounts[msg.threadId];
    if (unreadCount === 0) {
        // increment number of unread threads
        ++unreadThreadCount;
        // update DOM for threads
        $('#unreadThreads').text(unreadThreadCount);
    }

    // update DOM for the conversation
    $('#messageCount' + msg.threadId).text(unreadCount);
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

You then create models that hold the information. Like a Conversation model and a Notification model. Well the Notification model needs to know when the Conversation model updates like when someone sends you a message and a little unread icon appears next to messages.

It's complicated already... It becomes even more complicated with more models.

<br />

Some people use pub/sub which is nice... until you want the models to get the data in a certain order. (The notification bar which holds everything gets the message before the Conversation).

<br />
<h3>New way</h3>

There is a clean way to handle this issue. Using a unidirectional data flow. Flux's architecture looks something like this.

![Notification]({{ ASSET_PATH }}images/2015-02-28-learn-react-part-8-flux-architecture3.png)



<br />
`Action`: object with a type property and new data

`Action Creator`: methods that create Actions, they become the API.

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
// ### in FooActionCreator.js ###

var AppDispatcher = require('../AppDispatcher');
var AppConstants = require('../AppConstants');

var ActionTypes = AppConstants.ActionTypes;

module.exports = {
    // Action Creator
    createMessage(text){
        // That new object is an Action
        AppDispatcher.dispatch({
            type: ActionTypes.MESSAGE_CREATE,
            text: text
        });
    }
};
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->



<br />
`Dispatcher`: It's basically a registry of callbacks. The Flux dispatcher is a singleton. Payload is an Action. Primary API: dispatch(), register(), waitFor()

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
// ### in AppDispatcher.js ###

var Dispatcher = require('Flux.Dispatcher');

// export singleton
module.exports = new Dispatcher();
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->



<br />
`Store`: Each store is a singleton. Holds the data. Only way into the store is through the callback from the Dispatcher. Only has getters, no setters. It emits "I changed" events when the state changes.

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
// ### in FooStore ###

var _dispatchToken;
var _messages = {};

class FooStore extends EventEmitter {
    constructor(){
        super();

        _dispatcherToken = AppDispatcher.register( (action) => {
            switch(action.type){
                case ActionTypes.MESSAGE_CREATE:
                    var message = {
                        id: Date.now(),
                        text: action.text
                    };
                    _messages[message.id] = message;
                    this.emit('change');
                    break;

                case ActionTypes.MESSAGE_DELETE:
                    delete _messages[action.messageId];
                    this.emit('change');
                    break;

                default:
            }// End switch
        });// End AppDispatcher.register
    }// End constructor

    getDispatchToken(){
        return _dispatchToken;
    }

    getMessages(){
        return _messages;
    }
}
module.exports = new FooStore();
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

<br />
`Views`: Tree of react components. The components near the top of the tree listen for store changes. When there's a store change, they query the store for new data and pass it down to children.

![Lifecycles]({{ ASSET_PATH }}images/2015-02-28-learn-react-part-8-flux-architecture4.png)

<br />
We fist create our ControllerView which retrieves the data from the Store.

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
// ### in FooControllerView.react.js ###

var React = require('react');

var FooControllerView = React.createClass({
    getInitialState: function(){
        return {
            messages: FooStore.getMessages();
        };
    },

    componentDidMount: function(){
        FooStore.on('change', this._onChange);
    },

    componentWillUnmount: function(){
        FooStore.removeListener('change', this._onChange);
    },

    _onChange: function(){
        this.setState({
            messages: FooStore.getMessages();
        });
    },

    render: function(){
        //TODO
    }
});

module.exports = FooControllerView;
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
render: function(){
    var messageListItems = this.state.messages.map(message => {
        return (
            <FooChild
                key={message.id}
                id={message.id}
                text={message.text}
            />
        );
    }); // End messageListItems

    return (
        <ul>
            {messageListItems}
        </ul>
    );
}// End render
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

<br />
We now have to create FooChild which will display each message.

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
// ### in FooChild.react.js ###

var React = require('react');

var FooChild = React.createClass({
    propTypes = {
        id: React.PropTypes.number.isRequired,
        text: React.PropTypes.number.isRequired
    }

    render: function(){
        return (
            <li>{this.props.text}</li>
        );
    }
});

module.exports = FooChild;
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->