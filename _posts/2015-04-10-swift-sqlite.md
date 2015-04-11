---
layout: post
title: "Swift: SQLite"
description: ""
category: swift
tags: [ios, database, sqlite]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

When you want to persist data on a mobile device, you usually have to use its internal database. For iPhones and other Apple mobile devices, that's sqlite3. For this post, we'll look at the beautifully written `SwiftData` library found [here](https://github.com/ryanfowler/SwiftData) on github.

<!-- Content -->
<h3>Content</h3>

Simply download the `SwiftData.swift` file and copy it into your project. You also need the `libsqlite3.dylib` framework in your project, so make sure you add it. That framework is in C, so you have to add `#import "sqlite3.h"` to the `Briding-Header.h`. Now you're ready to start.


To create a new table.

<!-- Code _______________________________________-->
{% highlight swift linenos %}
if let err = SD.createTable("Cities", 
    withColumnNamesAndTypes: [
     "Name": .StringVal,
     "Population": .IntVal,
     "IsWarm": .BoolVal,
     "FoundedIn": .DateVal]) {
  // there was an error during this function, handle it here
} else {
  // no error, the table was created successfully
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


To delete a table.

<!-- Code _______________________________________-->
{% highlight swift linenos %}
let err = SD.deleteTable("TableName")
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


To find all tables.

<!-- Code _______________________________________-->
{% highlight swift linenos %}
let (tables, err) = SD.existingTables()
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

To insert.

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
//from user input
let name: String = //user input
let population: Int = //user input
let isWarm: Bool = //user input
let foundedIn: NSDate = //user input

if let err = SD.executeChange(
    "INSERT INTO Cities (Name, Population, IsWarm, FoundedIn) VALUES (?, ?, ?, ?)", 
    withArgs: [name, population, isWarm, foundedIn]) {
    //there was an error during the insert, handle it here
} else {
    //no error, the row was inserted successfully
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


To query a table.

<!-- Code _______________________________________-->
{% highlight swift linenos %}
let (resultSet, err) = SD.executeQuery("SELECT * FROM Cities")
if err != nil {
    //there was an error during the query, handle it here
} else {
    for row in resultSet {
        if let name = row["Name"]?.asString() {
            println("The City name is: \(name)")
        }
        if let population = row["Population"]?.asInt() {
            println("The population is: \(population)")
        }
        if let isWarm = row["IsWarm"]?.asBool() {
            if isWarm {
                println("The city is warm")
            } else {
                println("The city is cold")
            }
        }
        if let foundedIn = row["FoundedIn"]?.asDate() {
            println("The city was founded in: \(foundedIn)")
        }
    }
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->