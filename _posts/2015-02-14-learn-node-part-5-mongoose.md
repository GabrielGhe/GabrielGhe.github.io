---
layout: post
title: "Learn Node Part 5: Mongoose"
description: "One of the most popular NoSQL databases is MongoDB. It's great to use with node for any project and npm has a great module called mongoose to make things even easier. You can find more information [here](https://github.com/GabrielGhe/NodePractice/tree/master/Server12Mongoose)."
category: javascript
tags: [nodejs, mongodb, mongoose]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

One of the most popular NoSQL databases is MongoDB. It's great to use with node for any project and npm has a great module called mongoose to make things even easier. You can find more information [here](https://github.com/GabrielGhe/NodePractice/tree/master/Server12Mongoose).

<h3>Installation</h3>

Step 1
<!-- Code _______________________________________-->
{% highlight bash linenos=table  %}
### in the command line ###

# install mongodb using homebrew
brew install mongodb

# start up mongodb
mongod

# query mongodb
mongo

# install mongoose
npm install --save mongoose
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

Step 2
<!-- Code _______________________________________-->
{% highlight javascript linenos=table  %}
// ### in app.js ###
...

// Mongoose connecting
//---------------------------------------------
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');// "test" is the db name
mongoose.connection.on('error', function() {
  console.error('✗ MongoDB Connection Error. Please make sure MongoDB is running.');
});

// add ^ before this line
var app = express();

...
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

Step 3

<!-- Code _______________________________________-->
{% highlight javascript linenos=table  %}
// ### in model/testModel.js ###

var mongoose = require('mongoose');

var testModelSchema = mongoose.Schema({
    // look at mongoose/mongo api to know what's allowed
    name: String,
});

//add custom methods to the model if you want
testModelSchema.statics.customFunctionName = function(){
}

// Create the model and assign it to exports
module.exports = mongoose.model('testModel', testModelSchema, 'testModel');
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

Step 4

<!-- Code _______________________________________-->
{% highlight javascript linenos=table  %}
// Now you can require the model
var testModel = require("./model/testModel");

// and use mongoose functions on it
testModel.find({}, function(err, testModels){
    console.log("Found this many", testModels.length);
});

// or custom functions
testModelSchema.customFunctionName();
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->