---
layout: post
title: "Learn Node Part 12: React More"
description: "If you haven't already, look at how to initialize React [here](/javascript/2015/02/14/learn-node-part-11-basic-react/). You can find more information [here](https://github.com/GabrielGhe/NodePractice/tree/master/Server19ReactMore)."
category: javascript
tags: [nodejs, expressjs, react, components]
---
{% include JB/setup %}


<!-- Overview -->
<h3>Overview</h3>

If you haven't already, look at how to initialize React [here](/javascript/2015/02/14/learn-node-part-11-basic-react/). You can find more information [here](https://github.com/GabrielGhe/NodePractice/tree/master/Server19ReactMore).

React works with reusable components. They are similar to AngularJS directives in a way. We're going to be creating a person list.

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
// ### in first.jsx ###

/** @jsx React.DOM */
"use strict";

var data = [
  {first:"Vush", last: "Ky"},
  {first:"Dai", last: "Sy"},
  {first:"Ja", last: "Ky"}
];

var Person = React.createClass({
  render: function(){
    return (
      <div>
        <h2>{this.props.last}, {this.props.first}</h2>
      </div>
    )
  }
});// End Person


var PersonList = React.createClass({
  render: function(){
    var people = this.props.data.map(function(person){
      return <Person first={person.first} last={person.last} />
    });// End People

    return (
      <div>
        {people}
      </div>
    );
  }
});// End PersonList


var PersonApp = React.createClass({
  render: function(){
    return (
      <div>
        <h1>This is the person App</h1>
        <PersonList data={this.props.data} />
      </div>
    );
  }
});// End PersonApp


React.renderComponent(<PersonApp data={data} />, document.getElementById('first'));
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

We created a PersonApp which has data. The PersonApp then creates a PersonList which displays a Person for every object in the data array. React uses this.props to access attributes on the component (like first, last and data). Lets remove data because it's static.

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
// ### in first.jsx ###

// first remove the data array.
// Person doesn't change
// PersonList doesn't change


var PersonApp = React.createClass({
  getInitialState: function(){
    return { data: [], first:"", last:"" };
  },

  render: function(){
    return (
      <div>
        <h1>This is the person App</h1>
        <form>
          <input type="text" value={this.state.first} />
          <input type="text" value={this.state.last} />
          <button type="submit">Add</button>
        </form>

        <PersonList data={this.state.data} />
      </div>
    );
  }
});// End PersonApp

// notice we removed data on this line
React.renderComponent(<PersonApp />, document.getElementById('first'));
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

It looks good but it would be nice to change the state of first and last when their associated input changes.

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
// ### in first.jsx ###

var PersonApp = React.createClass({
  getInitialState: function(){
    return { data: [], first:"", last:"" };
  },
  onChangeFirst: function(e){
    this.setState({first: e.target.value});
  },
  onChangeLast: function(e){
    this.setState({last: e.target.value});
  },

  render: function(){
    return (
      <div>
        <h1>This is the person App</h1>
        <form>
          <input type="text" value={this.state.first} onChange={this.onChangeFirst} />
          <input type="text" value={this.state.last} onChange={this.onChangeLast} />
        </form>

        <PersonList data={this.state.data} />
      </div>
    );
  }
});// End PersonApp
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

The state changes but we're not modifying the data array inside the state. We want to add the new person object to the array. We're going to accomplish this by adding an onSubmit event and handler to PersonApp.

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
// ### in first.jsx ###

var PersonApp = React.createClass({
  getInitialState: function(){
    return { data: [], first:"", last:"" };
  },
  onChangeFirst: function(e){
    this.setState({first: e.target.value});
  },
  onChangeLast: function(e){
    this.setState({last: e.target.value});
  },
  handleSubmit: function(e){
    e.preventDefault();
    this.state.data.push({ first:this.state.first, last:this.state.last});
    this.setState({first:'', last:''});
  },

  render: function(){
    return (
      <div>
        <h1>This is the person App</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.first} onChange={this.onChangeFirst} />
          <input type="text" value={this.state.last} onChange={this.onChangeLast} />
          <button type="submit">Add</button>
        </form>

        <PersonList data={this.state.data} />
      </div>
    );
  }
});// End PersonApp
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->