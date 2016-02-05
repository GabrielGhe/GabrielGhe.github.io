---
layout: post
title: "Learn React Part 2: Render Gotchas"
description: "A general rule of thumb for returning multiple elements from the `render` function is to wrap everything with a `<div>`. [Egghead Video](https://egghead.io/lessons/react-hello-world-first-component)."
category: javascript
tags: [reactjs]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

A general rule of thumb for returning multiple elements from the `render` function is to wrap everything with a `<div>`. Here's the [Egghead Video](https://egghead.io/lessons/react-hello-world-first-component) for you to follow along.

<!-- Content -->
<h3>Content</h3>

If you try to add multiple html tags in the return statement, the web app will break.

The way to fix things is to wrap everything in a `<div />` tag.

{% highlight html linenos=table  %}
<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Render Method Gotchas</title>
        <script src="http://fb.me/react-0.8.0.js"></script>
        <script src="http://fb.me/JSXTransformer-0.8.0.js"></script>
    </head>
    <body>
    <script type="text/jsx">
        /*** @jsx React.DOM */
        var App = React.createClass({
            render:function(){
                return (
                        <div>
                            <h1>Hello World</h1>
                            <b>bold</b>
                        </div>
                        )
            }
        });

        React.renderComponent(<App />,document.body)
    </script>
    </body>
</html>
{% endhighlight %}

OUTPUT:

![Results]({{ ASSET_PATH }}/../images/2015-01-31-learn-react-part-2-render-gotchas.png)