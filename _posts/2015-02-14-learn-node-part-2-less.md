---
layout: post
title: "Learn Node Part 2: Less"
description: "Css is awesome, but it has a lot of limitations. For example, lets say that you have 1 color that you place everywhere (brand color). If you wanted to change this color, you would either go through each css file looking for it with control+f/cmd+f or you would do a find and replace. That's very inefficient. Less allows you to code css like a programming language. How does it work?"
category: javascript
tags: [nodejs, less, npm, express]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

Css is awesome, but it has a lot of limitations. For example, lets say that you have 1 color that you place everywhere (brand color). If you wanted to change this color, you would either go through each css file looking for it with control+f/cmd+f or you would do a find and replace. That's very inefficient. Less allows you to code css like a programming language. How does it work?

You can find more information [here](https://github.com/GabrielGhe/NodePractice/tree/master/Server9Less).

<!-- Code _______________________________________-->
{% highlight css linenos %}
@myColor: blue;
body {
  color:red;
  h2 {
    color: @myColor;
    
    &:hover {
      text-align:center;
    }
  }
  p {
    background-color: @myColor;
  }
}

/* Compiles to */

body {
  color:red;
}
body h2 {
  color: blue;
}
body h2:hover {
  text-align:center;
}
body p {
  background-color: blue;
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

<h4>Installation</h4>

<!-- Code _______________________________________-->
{% highlight bash linenos %}
# To install less in your express app
npm install less-middleware
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
// inside your app.js
var lessMiddleware = require('less-middleware');
app.use(lessMiddleware(__dirname + '/public'));
// this order is important
app.use(express.static(__dirname + '/public'));

// Now when you create .less files, a matching .css file gets created when you save
// So you can add the link to that css file in your html like you normally would and voila
// example in this project folder as usual.
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->