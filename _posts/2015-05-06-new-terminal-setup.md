---
layout: post
title: "Setup: New Terminal"
description: ""
category: gabrielghe
tags: [git, sublime text 2]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

Getting a new computer is awesome, but you have to set up your work environment all over again. For macs, this is what I do to set up my terminal.


<!-- Content -->
<h3>Content</h3>

<br />

<!-- Sublime -->
<h4>Sublime</h4>

I really like to modify files in sublime, so that's the first thing I get. I download it from [here](http://www.sublimetext.com/2)

I have to set up the `subl` command in the terminal so that when I want to open a file or a directory, I simply run `subl filename`. 

To do that, first go to the directory that holds the `Users`,`bin` and `usr` directories (just do `cd ..` until you hit it. 

Now that you're there, create a symlink to sublime using the following command: `ln -s "/Applications/Sublime Text 2.app/Contents/SharedSupport/bin/subl" ~/bin/subl`

Congrats, sublime is now set up. You can also open your `.bash_profile` and put `export EDITOR='subl -w'` so that sublime becomes your default editor.

<br />

<!-- Git Autocomplete -->
<h4>Git Autocomplete</h4>

Next we need git autocomplete. The guide is perfect so just go [here](http://code-worrier.com/blog/autocomplete-git/) and follow the steps.

<!-- Git Current Branch -->
<h4>Git Current Branch</h4>

We also need to know what git branch we're on (well... I need to). An awesome guide that allows you to do that already exists. Just go [here](http://code-worrier.com/blog/git-branch-in-bash-prompt/) and follow the steps.

After everything, I modify the PS1 to look really cool. Open your bash profile (`subl ~/.bash_profile`) and add the following line of code at the end.

PS1="e[32m&#92;]&#92;u:&#92;e[33m&#92;]&#92;w&#92;e[31m&#92;]&#92;$(__git_ps1) &#92;e[35m&#92;][&#92;t]&#92;e[37m&#92;]&#92;&#92;n&#92;$ "
