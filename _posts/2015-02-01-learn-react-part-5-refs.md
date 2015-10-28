---
layout: post
title: "Learn React Part 5: Refs"
description: "A cool feature to be able to modify multiple things at once is `refs`. By placing a ref on html elements inside a component's render return, you can access them anywhere inside the component's methods. Here's the [Egghead Video](https://egghead.io/lessons/react-using-refs-to-access-components) for you to follow along."
category: javascript
tags: [reactjs, refs]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

A cool feature to be able to modify multiple things at once is `refs`. By placing a ref on html elements inside a component's render return, you can access them anywhere inside the component's methods. Here's the [Egghead Video](https://egghead.io/lessons/react-using-refs-to-access-components) for you to follow along.

<!-- Content -->
<h3>Content</h3>

<!-- Part 1 -->
<h4>Part 1</h4>

We have to change several things to our previous code. First, we need to change the initial state to red, green and blue. 

Second, we have to change the update function. Notice that we say `this.refs.*.getDOMNode().value`. We're looking for a particular ref in the render return statement and accessing its value. 

Third, we have to change the input to type range and we have to add `ref="red"` (or another string) to each input.

{% highlight html linenos %}
<script type="text/jsx">
    /*** @jsx React.DOM */
    var App = React.createClass({
        getInitialState:function(){
            return {
              red: 0,
              green: 0,
              blue: 0
            };
        },
        update:function(){
            this.setState({
              red: this.refs.red.getDOMNode().value,
              green: this.refs.green.getDOMNode().value,
              blue: this.refs.blue.getDOMNode().value
            });
        },
        render:function(){
            return (
                    <div>
                        <input ref="red" type="range" onChange={this.update} />
                        <label>{this.state.red}</label>
                        <input ref="green" type="range" onChange={this.update} />
                        <label>{this.state.green}</label>
                        <input ref="blue" type="range" onChange={this.update} />
                        <label>{this.state.blue}</label>
                    </div>
                    )
        }
    });

    React.renderComponent(<App />,document.body);
</script>
{% endhighlight %}

<br />

<!-- Part 2 -->
<h4>Part 2</h4>

Next, we should move the input into its own component. On `line 36`, we move the input into a component called `Slider`. We give it a ref of `range`. On `line 12 - 15`, we access each component's `refs.range` to get the value.

{% highlight html linenos %}
<script type="text/jsx">
    /*** @jsx React.DOM */
    var App = React.createClass({
        getInitialState:function(){
            return {
              red: 0,
              green: 0,
              blue: 0
            };
        },
        update:function(){
            this.setState({
              red: this.refs.red.refs.range.getDOMNode().value,
              green: this.refs.green.refs.range.getDOMNode().value,
              blue: this.refs.blue.refs.range.getDOMNode().value
            });
        },
        render:function(){
            return (
                    <div>
                        <Slider ref="red" update={this.update} />
                        <label>{this.state.red}</label>
                        <Slider ref="green" update={this.update} />
                        <label>{this.state.green}</label>
                        <Slider ref="blue" update={this.update} />
                        <label>{this.state.blue}</label>
                    </div>
                    )
        }
    });

    var Slider = React.createClass({
      render:function(){
          return (
              <div>
                  <input ref="range" min="0" max="255" type="range" onChange={this.props.update} />
              </div>
            )
      }
    });

    React.renderComponent(<App />,document.body);
</script>
{% endhighlight %}