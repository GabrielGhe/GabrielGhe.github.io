---
layout: post
title: "Learn Node Part 8: Passport"
description: ""
category: javascript
tags: [nodejs, passportjs]
---
{% include JB/setup %}

If you ever wondered how people use the <b>Sign in with Google</b> way of logging in, here's how. You can find more information [here](https://github.com/GabrielGhe/NodePractice/tree/master/Server15Passport).

<h3>Installation</h3>

Step 1

<!-- Code _______________________________________-->
{% highlight bash linenos %}
### Command Line ###

# Get the right packages
npm install --save passport
npm install --save passport-google
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

Step 2

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
// ### in app.js ###

// At the top
var passport = require('passport');

// Add middleware
app.use(passport.initialize());
app.use(app.router);  // has to be before this line
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

Step 3

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
// ### in config/passport-config.js ###

var passport = require('passport')
  , GoogleStrategy = require('passport-google').Strategy;


// For persistent login
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


passport.use(new GoogleStrategy({
    returnURL: 'http://localhost:3000/auth/google/return',
    // Where it's valid
    realm: 'http://localhost:3000/'
  },
  function(identifier, profile, done) {
    process.nextTick(function () {
      profile.identifier = identifier;
      return done(null, profile);
    });
  }
));
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

Step 4

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
// ### in app.js ###

// at the bottom
require('./config/passport-config');

app.get('/auth/google', passport.authenticate('google', {
  scope: ['email']
}));

app.get('/auth/google/return', passport.authenticate('google', {
  successRedirect: "/good",
  failureRedirect: "/bad"
}));
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->