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

Flux is a type of web application architecture that plays nicely with React's unidirectional data flow. You can find all the information from this post and a lot more in the [Full Stack Flux](https://www.youtube.com/watch?v=KtmjkCuV-EU) video.

<br />
<h3>Old way</h3>

Let's take the facebook chat as the example. If we wanted to get the number of unread messages for each thread (unread messages per person).

![Notification]({{ ASSET_PATH }}images/2015-02-28-learn-react-part-8-flux-architecture2.png)

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

![Notification]({{ ASSET_PATH }}images/2015-02-28-learn-react-part-8-flux-architecture.png)

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




