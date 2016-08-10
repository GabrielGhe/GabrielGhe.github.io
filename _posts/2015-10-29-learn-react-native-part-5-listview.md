---
layout: post
title: "Learn React-Native Part 5: ListView"
description: "This post is all about creating a `ListView` using <b>react-native</b>. We'll look at rows and sections. You can find more information about the `ListView` component [here](https://facebook.github.io/react-native/docs/listview.html)."
category: javascript
tags: [ios, list, rows, sections, react, swift, xcode]
---
{% include JB/setup %}


<!-- Overview -->
<h3>Overview</h3>

This post is all about creating a `ListView` using <b>react-native</b>. We'll look at rows and sections. You can find more information about the `ListView` component [here](https://facebook.github.io/react-native/docs/listview.html).

<!-- Content -->
<h3>Content</h3>


I'll first show the final code, then break it up into parts.


<!-- Code _______________________________________-->
{% highlight javascript linenos=table  %}
'use strict';

var React = require('react-native');
var {
    Text,
    View,
    Component,
    StyleSheet,
    TouchableHighlight,
    ListView
} = React;

var sections = ["SectionTitle1", "SectionTitle2"]
var rowsBySection = {
    SectionTitle1: ["sec1 row1", "sec1 row2"],
    SectionTitle2: ["sec2 row1", "sec2 row2"]
};

class ListTest extends Component {
    constructor(props) {
        super(props);

        var {rowsBySection, sections} = this.generateListViewData();
        var ds = new ListView.DataSource({
            sectionHeaderHasChanged: (r1,r2) => r1 !== r2,
            rowHasChanged: (r1,r2) => r1 !== r2
        });

        this.state = {
            dataSource: ds.cloneWithRowsAndSections(rowsBySection, sections)
        };
    }

    generateListViewData() {
        return {rowsBySection, sections};
    }

    renderRow(rowData) {
        return (
            <TouchableHighlight
                style={styles.row}>
                    <Text>{rowData}</Text>
            </TouchableHighlight>
        );
    }

    renderSectionHeader(data, sectionName) {
        return (
            <View style={styles.section}>
                <Text>{sectionName}</Text>
            </View>
        );
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}
                renderSectionHeader={this.renderSectionHeader.bind(this)}
            />
        );
    }
}

module.exports = ListTest;
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->



This is the only confusing part in my opinion. This is what our data looks like. We have an array of strings for our sectionIds and they map to rows in the `rowsBySection` object. I believe that the rest of the code is pretty self explanatory.

<!-- Code _______________________________________-->
{% highlight javascript linenos=table  %}
var sections = ["SectionTitle1", "SectionTitle2"]
var rowsBySection = {
    SectionTitle1: ["sec1 row1", "sec1 row2"],
    SectionTitle2: ["sec2 row1", "sec2 row2"]
};
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


