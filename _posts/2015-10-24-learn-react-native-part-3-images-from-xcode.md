---
layout: post
title: "Learn React-Native Part 3: Images from XCode"
description: "This is part 3 of me learning react-native. I'm going to go over how to use images that you have set in XCode in the `Images.xcassets` file."
category: javascript
tags: [ios, react-native, react, swift, xcode, images]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

This is part 3 of me learning react-native. I'm going to go over how to use images that you have set in XCode in the `Images.xcassets` file.

<!-- Content -->
<h3>Content</h3>

![Images.xcassets]({{ ASSET_PATH }}images/2015-10-24-learn-react-native-part-3-images-from-xcode1.png)

Create a new image set called nameOfImage(if you don't know how, [here](http://stackoverflow.com/questions/19441935/use-of-xcassets)'s a guide) and then use the name to require that image.

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
<Image source={require('image!nameOfImage')} />
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

If you open up Images.xcassets in XCode, you'll see all the image sets that you created. One of them should be the new `nameOfImage` that you created before.