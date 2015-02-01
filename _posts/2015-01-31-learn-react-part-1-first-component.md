---
layout: post
title: "Learn React Part 1: First Component"
description: ""
category: javascript
tags: [reactjs, component]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

This is part 1 of me learning ReactJS. I'm going to be following [this](https://egghead.io/lessons/react-hello-world-first-component) series while trying to master ReactJS.

<!-- Content -->
<h3>Content</h3>

<!-- Step 1 -->
<h4>Step 1</h4>

{% highlight html linenos %}
<!doctype html>
<html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>First Component</title>
  </head>
  <body></body>
</html>
{% endhighlight %}

We start off with a simple html page.

<br />

<!-- Step 2 -->
<h4>Step 2</h4>

{% highlight html linenos %}
<!doctype html>
<html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>First Component</title>
      <script src="http://fb.me/react-0.8.0.js"></script>
      <script src="http://fb.me/JSXTransformer-0.8.0.js"></script>
  </head>
  <body></body>
</html>
{% endhighlight %}

Now we add the `react.js` and the `JSXTransformer.js` scripts. The `JSXTransformer` allows you to write react's special jsx syntax directly without having to compile your jsx files.

<br />

<!-- Step 3 -->
<h4>Step 3</h4>

{% highlight html linenos %}
<html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>First Component</title>
      <script src="http://fb.me/react-0.8.0.js"></script>
      <script src="http://fb.me/JSXTransformer-0.8.0.js"></script>
      <script type="text/jsx">
          /*** @jsx React.DOM */
          React.renderComponent(<h1>Hello World</h1>,document.body);
      </script>
  </head>
  <body></body>
</html>
{% endhighlight %}

Next we added a jsx script tag. Notice that we add `type="text/jsx"` instead of `type="text/javascript"`. At the beginning of every jsx file or script tag we have to add `/*** @jsx React.DOM */` for the Transformer to transform the file/script. 

The `<h1>Hello World</h1>` is just plain html. The Transformer will turn it into React.DOM for it to be just javascript. We render our component by using `React.renderComponent` passing in our component and where we want to render it (it can be on any DOM element).

<br />

<!-- Step 4 -->
<h4>Step 4</h4>

{% highlight html linenos %}
<html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>First Component</title>
      <script src="http://fb.me/react-0.8.0.js"></script>
      <script src="http://fb.me/JSXTransformer-0.8.0.js"></script>
      <script type="text/jsx">
          /*** @jsx React.DOM */
          var App = React.createClass({
              render:function(){
                  return (
                      <h1>Hello World</h1>
                  )
              }
          });

          React.renderComponent(<App />,document.body);
      </script>
  </head>
  <body></body>
</html>
{% endhighlight %}

We now create a component called `App`. You create a component using `React.createClass` passing in an object which represents that component. Every component has a render function which represents what it will look like. Our `App` component will display `<h1>Hello World</h1>`.

<br />

OUTPUT:

![Results]({{ ASSET_PATH }}images/2015-01-31-learn-react-part-1-first-component.png)