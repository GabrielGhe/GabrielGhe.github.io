---
layout: post
title: "Learn React Part 4: States"
description: "Properties are for data that is passed to components but doesn't change. If we want the component to change, we have to use states. Here's the [Egghead Video](https://egghead.io/lessons/react-state-basics) for you to follow along."
category: javascript
tags: [reactjs, state]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

Properties are for data that is passed to components but doesn't change. If we want the component to change, we have to use states. Here's the [Egghead Video](https://egghead.io/lessons/react-state-basics) for you to follow along.

<!-- Content -->
<h3>Content</h3>

<!-- Part 1 -->
<h4>Part 1</h4>

To use state we have to add the `getInitialState` function to our component on `line 5`. In the `render` function, we have to change `this.props.txt` to the state version `this.state.txt` on `line 10`.

{% highlight html linenos %}
<script type="text/jsx">
    /*** @jsx React.DOM */
    var App = React.createClass({
        getInitialState:function(){
            return { txt: "this is the txt prop", id:0 };
        },
        render:function(){
            return (
                    <div>
                        <h1>{this.state.txt}</h1>
                    </div>
                    )
        }
    });

    React.renderComponent(<App />,document.body)
</script>
{% endhighlight %}

<br />

<!-- Part 2 -->
<h4>Part 2</h4>

We can now modify the state and have the component rerender by updating the `txt` property of the state.

{% highlight html linenos %}
<script type="text/jsx">
    /*** @jsx React.DOM */
    var App = React.createClass({
        getInitialState:function(){
            return { txt: "this is the txt prop", id:0 };
        },
        updateTxt:function(e){
            this.setState({ txt: e.target.value });
        },
        render:function(){
            return (
                    <div>
                        <input onChange={this.updateTxt} />
                        <h1>{this.state.txt}</h1>
                    </div>
                    )
        }
    });

    React.renderComponent(<App />,document.body);
</script>
{% endhighlight %}

<br />

<!-- Part 3 -->
<h4>Part 3</h4>

Here's an example of how to use states to display the color of a div based on the rgb.

{% highlight html linenos %}
<script>
var App = React.createClass({
    getInitialState:function(){
        return {
          red: 0,
          green: 0,
          blue: 0,
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
        var myStyle = {
            height: "100px",
            width: "100px",
            backgroundColor: ("rgb(" + this.state.red
                               + "," + this.state.green
                               + "," + this.state.blue
                               + ")")
        };
        return (
                <div>
                    <div style={myStyle} />
                    <Slider ref="red" update={this.update} />
                    <label>Red {this.state.red}</label>
                    <Slider ref="green" update={this.update} />
                    <label>Green {this.state.green}</label>
                    <Slider ref="blue" update={this.update} />
                    <label>Blue {this.state.blue}</label>
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
</script>
{% endhighlight %}