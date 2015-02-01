/** @jsx React.DOM */

var SearchPost = React.createClass({
  onMouseOver: function(e){

  },
  render: function(){
    var tags = this.props.tags.split(" ").map(function(tag){
      return (<a href={'/tags.html#'+ tag +'-ref'} className="label label-success">{ tag }</a>);
    });

    var iconStyle = {
      fontSize: "3em",
      float: "left",
      lineHeight: "40px",
      marginRight: "5px"
    };

    return (
      <li className="searchElement">
        {/* Icon */}
        <i className={"icon-" + this.props.category } style={iconStyle}></i>

        {/* Content */}
        <div>
          <a href={this.props.url}>{this.props.title}</a>
          <div>
            <a href={'/categories.html#' + this.props.category + '-ref'} className="label label-primary">
              { this.props.category }
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
    var searchR = this.props.data.slice(0, 7).map(function(post){
      return <SearchPost title={post.title} url={post.id} category={post.category} tags={post.tags} />
    });// End Post Item

    var myStyle = {
      display: (this.props.data == 0)? "none" : "block"
    }

    return (
      <ul style={myStyle}>
        {searchR}
      </ul>
    );
  }
});// End PostList


var SearchPostResults = React.createClass({
  render: function(){
    return (
      <div>
        <SearchPostList data={this.props.data} />
      </div>
    );
  }
});// End SearchPostResults