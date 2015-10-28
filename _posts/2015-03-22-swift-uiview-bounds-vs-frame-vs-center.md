---
layout: post
title: "Swift: UIView Bounds vs Frame vs Center"
description: "When developing for iOS, a lot of people confuse a UIView's `bounds`, `frame` and `center`. This post will illustrate their difference. The images are taken from [Stanford's cs193p class](http://web.stanford.edu/class/cs193p/cgi-bin/drupal/)."
category: swift
tags: [ios, bounds, center, frame, ui]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

When developing for iOS, a lot of people confuse a UIView's `bounds`, `frame` and `center`. This post will illustrate their difference. The images are taken from [Stanford's cs193p class](http://web.stanford.edu/class/cs193p/cgi-bin/drupal/).

`bounds`: The UIView's size and location relative to itself.

`frame`: The UIView's size and location relative to its superview.

`center`: The UIView's center relative to its superview. To get center of your own view, you do `convertPoint(center, fromView: superview)`

![Results]({{ ASSET_PATH }}images/2015-03-22-swift-uiview-bounds-vs-frame-vs-center1.png)

![Results]({{ ASSET_PATH }}images/2015-03-22-swift-uiview-bounds-vs-frame-vs-center2.png)