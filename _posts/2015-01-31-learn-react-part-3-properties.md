---
layout: post
title: "Learn React Part 3: Properties"
description: ""
category: javascript
tags: [reactjs, property]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

Properties can get passed down from a component to it's children. [Egghead Video](https://egghead.io/lessons/react-introduction-to-properties)

<!-- Content -->
<h3>Content</h3>

<br />

<!-- Part 1 -->
<h4>Part 1</h4>

You can pass data to your component using properties. We added `txt` prop.

{% highlight html linenos %}
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Setting Properties</title>
    <script src="http://fb.me/react-0.8.0.js"></script>
  <script src="http://fb.me/JSXTransformer-0.8.0.js"></script>
</head>
<body>
<script type="text/jsx">
    /*** @jsx React.DOM */
    var App = React.createClass({
        render:function(){
            console.log(this.props.txt)
            return (
                    <div>
                        <h1>{this.props.txt}</h1>
                        <b>bold</b>
                    </div>
                    )
        }
    });

    React.renderComponent(<App txt="This is the txt prop" />,document.body)
</script>
</body>
</html>
{% endhighlight %}

![Results]({{ ASSET_PATH }}images/2015-01-31-learn-react-part-3-properties.png)

<br />

<!-- Part 2 -->
<h4>Part 2</h4>

You can also specify the props that you're expecting using the `propTypes` property. By default, a propType is optional; however, if you add `cat: React.PropTypes.number.isRequired` then React will complain because it's not one of the properties of App. If we add cat to the app initialization on `line 17`, it will work.

{% highlight html linenos %}
<script type="text/jsx">
    /*** @jsx React.DOM */
    var App = React.createClass({
        propTypes:{
          txt: React.PropTypes.string,
          cat: React.PropTypes.number.isRequired
        },
        render:function(){
            return (
                    <div>
                        <h1>{this.props.txt}</h1>
                    </div>
                    )
        }
    });

    React.renderComponent(<App cat={5} txt="This is the txt prop" />,document.body)
</script>
{% endhighlight %}

<br />

<!-- Part 3 -->
<h4>Part 3</h4>

You can define the default properties for any component using the `getDefaultProps` property on the component.
Which means the code below will work even though we don't have `cat` and `txt` on on App initialization on `line 23`.

{% highlight html linenos %}
<script type="text/jsx">
    /*** @jsx React.DOM */
    var App = React.createClass({
        getDefaultProps: function(){
          return {
              txt: "This is stuff",
              cat: 0
          };
        },
        propTypes:{
          txt: React.PropTypes.string,
          cat: React.PropTypes.number.isRequired
        },
        render:function(){
            return (
                    <div>
                        <h1>{this.props.txt}</h1>
                    </div>
                    )
        }
    });

    React.renderComponent(<App />,document.body)
</script>
{% endhighlight %}