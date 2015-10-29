'use strict';

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var SearchPost = React.createClass({
    displayName: 'SearchPost',

    onMouseOver: function onMouseOver() {
        this.props.hoverItem(this.props.index);
    },
    onClick: function onClick() {
        this.props.selectItem(this.props.url);
    },
    render: function render() {
        var tags = this.props.tags.split(" ").map(function (tag) {
            return React.createElement(
                'a',
                { href: '/tags.html#' + tag + '-ref', className: 'label label-default' },
                tag
            );
        });

        var iconStyle = {
            fontSize: "3em",
            float: "left",
            lineHeight: "40px",
            marginRight: "5px"
        };

        return React.createElement(
            'li',
            { onMouseOver: this.onMouseOver,
                onClick: this.onClick,
                className: "searchElement" + this.props.isActive },
            React.createElement('i', { className: "icon-" + this.props.category, style: iconStyle }),
            React.createElement(
                'div',
                null,
                React.createElement(
                    'a',
                    { href: this.props.url },
                    this.props.title
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'a',
                        { href: '/categories.html#' + this.props.category + '-ref', className: "label label-primary" },
                        this.props.category
                    ),
                    tags
                )
            )
        );
    } //END render
}); //END Post

var SearchPostList = React.createClass({
    displayName: 'SearchPostList',

    render: function render() {
        var that = this;
        var searchR = this.props.data.map(function (post, idx) {
            return React.createElement(SearchPost, { isActive: idx === that.props.activeItem ? " active" : "",
                title: post.title,
                index: idx,
                url: post.id,
                tags: post.tags,
                hoverItem: that.props.hoverItem,
                selectItem: that.props.selectItem,
                category: post.category });
        }); // End Post Item

        var myStyle = {
            display: this.props.focused && this.props.data.length > 0 ? "block" : "none"
        };

        return React.createElement(
            'div',
            { className: 'searchResults' },
            React.createElement(
                'ul',
                { style: myStyle },
                searchR
            )
        );
    }
}); // End PostList

var SearchBar = React.createClass({
    displayName: 'SearchBar',

    getInitialState: function getInitialState() {
        return {
            data: [],
            activeItem: 0,
            focused: false
        };
    },
    search: function search(value) {
        var myPosts = this.props.posts;
        var result = this.props.lunr.search(value);
        var list = [];
        if (result && result.length > 0) {
            var resultNumber = Math.min(result.length, 7);
            for (var i = 0; i < resultNumber; ++i) {
                list.push(myPosts[result[i].ref]);
            }
        }

        this.setState({ data: list });
    },
    selectItem: function selectItem(path) {
        document.location.href = path;
    },
    hoverItem: function hoverItem(index) {
        this.setState({ activeItem: index });
    },
    onFocus: function onFocus(e) {
        this.setState({ focused: true });
    },
    onBlur: function onBlur(e) {
        setTimeout((function () {
            this.setState({ focused: false });
        }).bind(this), 200);
    },
    onChange: function onChange(e) {
        this.setState({ activeItem: 0 });
        this.search(e.target.value);
    },
    onKeyUp: function onKeyUp(e) {
        var active = this.state.activeItem;
        var keyCode = e.keyCode;
        switch (keyCode) {
            // down
            case 40:
                active < this.state.data.length - 1 && (active += 1);
                break;
            // up
            case 38:
                active > 0 && (active -= 1);
                break;
            // enter
            case 13:
                this.selectItem(this.state.data[active].id);
                break;
        }
        if (keyCode === 40 || keyCode === 38 || keyCode === 13) {
            e.preventDefault();
            e.stopPropagation();
        }
        this.setState({
            activeItem: active
        });
    },
    componentDidMount: function componentDidMount() {
        var shouldFocus = !/^(\/categories.html)|(\/tags.html)/g.test(document.location.pathname);
        if (shouldFocus) {
            this.refs.q.getDOMNode().focus();
        }
    },
    render: function render() {
        return React.createElement(
            'div',
            { className: 'input-group' },
            React.createElement(
                'span',
                { className: 'input-group-addon' },
                React.createElement('span', { className: 'glyphicon glyphicon-search' })
            ),
            React.createElement('input', { type: 'search',
                id: 'q',
                ref: 'q',
                className: 'form-control',
                placeholder: 'Search', autoComplete: 'off',
                onKeyUp: this.onKeyUp,
                onBlur: this.onBlur,
                onFocus: this.onFocus,
                onChange: this.onChange }),
            React.createElement(SearchPostList, { data: this.state.data,
                focused: this.state.focused,
                selectItem: this.selectItem,
                hoverItem: this.hoverItem,
                activeItem: this.state.activeItem })
        );
    }
}); // End SearchBar

var RandomPost = React.createClass({
    displayName: 'RandomPost',

    render: function render() {
        var style = {
            fontSize: "2em",
            marginRight: "5px"
        };

        var liStyle = {
            marginBottom: "30px"
        };

        return React.createElement(
            'li',
            { style: liStyle },
            React.createElement('i', { className: "icon-" + this.props.data.category, style: style }),
            React.createElement(
                'a',
                { href: this.props.data.id },
                this.props.data.title
            )
        );
    }
}); // End RandomPost

var RandomPostList = React.createClass({
    displayName: 'RandomPostList',

    getInitialState: function getInitialState() {
        return {
            posts: []
        };
    },
    componentDidMount: function componentDidMount() {
        // mapping item to a react component
        var random_items = this.props.posts.map(function (post) {
            return React.createElement(RandomPost, { data: post });
        });

        this.setState({ posts: random_items });
    },
    render: function render() {
        return React.createElement(
            'ul',
            { className: 'posts' },
            React.createElement(
                ReactCSSTransitionGroup,
                { transitionName: 'random' },
                this.state.posts
            )
        );
    }
}); // End RandomPostList
/* Icon */ /* Content */ /* End Content */