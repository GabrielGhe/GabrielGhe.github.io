---
layout: post
title: "My first post"
description: "Setting up Jekyll"
category: me
tags: ["programming", "swift", "javascript", "java", "python", "csharp"]
---
{% include JB/setup %}

It took me a while to get this blog up because I was trying to understand how Jekyll works.
The site built fine locally but it didn't seem to want to build on github. 
The reason was that I was trying to make a blog folder and put all the Jekyll files in there.
Long story short, put your jekyll files in the root of the repo so that github doesn't spam you with build fail emails.
