---
layout: post
title: "Globally Installed Node Modules Not Found"
description: ""
category: javascript
tags: [npm, nodejs, module]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

While trying out [React-Native](https://facebook.github.io/react-native/), I updated Node and installed [react-native-cli](https://www.npmjs.com/package/react-native-cli) globally. When I tried to run it, it said `command not found`. After quite a bit of digging and reinstalling node and npm, I found the solution.

<!-- Content -->
<h3>Content</h3>

So when you run `npm root`, you should get your current working directory. That's where npm puts your modules when you install them. When you run `npm root -g`, you should get something like `/usr/local/lib/node_modules`.

If you get your current working directory in both cases, you have to update the path with the following command `npm config set prefix /usr/local`

Now reinstall your global module and it should work.