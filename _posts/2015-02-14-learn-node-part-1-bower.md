---
layout: post
title: "Learn Node Part 1: Bower"
description: "NodeJS has the amazing npm, which is one of my favorite package managers. It handles all your modules
neatly inside the package.json file. This is great for the server side, but what about the client side? That's where bower comes in handy."
category: javascript 
tags: [nodejs, bowerjs, npm]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

NodeJS has the amazing npm, which is one of my favorite package managers. It handles all your modules
neatly inside the package.json file. This is great for the server side, but what about the client side?

That's where bower comes in handy. BowerJS manages your client side dependencies. Everything from jQuery, AngularJS and bootstrap can all be easily installed with bower. You can find more information [here](https://github.com/GabrielGhe/NodePractice/tree/master/Server8Bower).


<!-- Code _______________________________________-->
{% highlight bash linenos=table  %}
# once you install npm ... first, in your command line
$ npm install -g bower
$ touch .bowerrc
$ touch bower.json
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

<!-- Code _______________________________________-->
{% highlight javascript linenos=table  %}
// in .bowerrc
{
  //where do you want the bower components to be stored
  "directory" : "public/bower_components"
}

// in bower.json
{
  "name": "Server1",
  "version": "0.0.1",
  "dependencies": {
  }
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


After that, you can simply add components by doing the following in your command line.

<!-- Code _______________________________________-->
{% highlight javascript linenos=table  %}
bower install jquery
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->