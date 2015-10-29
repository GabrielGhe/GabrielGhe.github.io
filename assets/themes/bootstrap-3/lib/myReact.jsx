/** @jsx React.DOM */

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var SearchPost = React.createClass({
  onMouseOver: function(){
      this.props.hoverItem(this.props.index);
  },
  onClick: function(){
      this.props.selectItem(this.props.url);
  },
  render: function(){
      var tags = this.props.tags.split(" ").map(function(tag){
          return (<a href={'/tags.html#'+ tag +'-ref'} className="label label-default">{ tag }</a>);
      });

      var iconStyle = {
          fontSize: "3em",
          float: "left",
          lineHeight: "40px",
          marginRight: "5px"
      };

      return (
          <li onMouseOver={this.onMouseOver}
              onClick={this.onClick}
              className={"searchElement" + this.props.isActive }>

              {/* Icon */}
              
              <i className={"icon-" + this.props.category} style={iconStyle}></i>
              
              {/* Content */}
              <div>
                  <a href={this.props.url}>{this.props.title}</a>
                  <div>
                      <a href={'/categories.html#' + this.props.category + '-ref'} className={"label label-primary"}>
                          {this.props.category}
                      </a>
                      {tags}
                  </div>
              </div>
              {/* End Content */}
          </li>
      );
    } //END render
}); //END Post


var SearchPostList = React.createClass({
  render: function(){
      var that = this;
      var searchR = this.props.data.map(function(post, idx){
          return <SearchPost  isActive={ (idx === that.props.activeItem)? " active" : "" }
                              title={post.title}
                              index={idx}
                              url={post.id}
                              tags={post.tags}
                              hoverItem={that.props.hoverItem}
                              selectItem={that.props.selectItem}
                              category={post.category} />
    });// End Post Item

    var myStyle = {
      display: (this.props.focused && this.props.data.length > 0)? "block" : "none"
    }

    return (
      <div className="searchResults">
        <ul style={myStyle}>
            {searchR}
        </ul>
      </div>
    );
  }
});// End PostList


var SearchBar = React.createClass({
  getInitialState: function(){
      return {
          data: [],
          activeItem: 0,
          focused: false
      };
  },
  search: function(value){
      var myPosts = this.props.posts;
      var result = this.props.lunr.search(value);
      var list = [];
      if(result && result.length > 0) {
          var resultNumber = Math.min(result.length, 7);
          for(var i=0; i < resultNumber; ++i){
              list.push(myPosts[result[i].ref]);
          }
      }

      this.setState({ data: list });
  },
  selectItem: function(path){
      document.location.href = path
  },
  hoverItem: function(index){
      this.setState({ activeItem: index });
  },
  onFocus: function(e){
      this.setState({ focused: true });
  },
  onBlur: function(e){
      setTimeout(function(){
          this.setState({ focused: false });
      }.bind(this), 200);
  },
  onChange: function(e){
      this.setState({ activeItem: 0 });
      this.search(e.target.value);
  },
  onKeyUp: function(e){
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
  componentDidMount: function(){
      var shouldFocus = !/^(\/categories.html)|(\/tags.html)/g.test(document.location.pathname);
      if (shouldFocus) {
          this.refs.q.getDOMNode().focus();
      }
  },
  render: function(){
    return (
        <div className="input-group">
          <span className="input-group-addon">
              <span className="glyphicon glyphicon-search"></span>
          </span>
          <input  type="search"
                  id="q"
                  ref="q"
                  className="form-control"
                  placeholder="Search" autoComplete="off"
                  onKeyUp={this.onKeyUp}
                  onBlur={this.onBlur}
                  onFocus={this.onFocus}
                  onChange={this.onChange} />
          <SearchPostList data={this.state.data}
                          focused={this.state.focused}
                          selectItem={this.selectItem}
                          hoverItem={this.hoverItem}
                          activeItem={this.state.activeItem} />
        </div>
    )
  }
}); // End SearchBar

var RandomPost = React.createClass({
    render: function(){
        var style = {
          fontSize: "2em",
          marginRight: "5px",
        };
        
        var liStyle = {
          marginBottom: "30px"
        };

        return (
            <li style={liStyle}>
                <i className={"icon-" + this.props.data.category} style={style}></i>
                <a href={this.props.data.id}>
                    {this.props.data.title}
                </a>
            </li>
        )
    }
}); // End RandomPost

var RandomPostList = React.createClass({
    getInitialState: function(){
        return {
            posts: []
        };
    },
    componentDidMount: function(){
        // mapping item to a react component
        var random_items = this.props.posts.map(function(post){
            return (
                <RandomPost data={post} />
            );
        });

        this.setState({posts: random_items});
    },
    render: function(){
        return (
            <ul className="posts">
                <ReactCSSTransitionGroup transitionName="random">
                    {this.state.posts}
                </ReactCSSTransitionGroup>
            </ul>
        );
    }
});// End RandomPostList
