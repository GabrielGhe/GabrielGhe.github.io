/** @jsx React.DOM */

var SearchPost = React.createClass({
  onMouseOver: function(e){

  },
  render: function(){
    var tags = this.props.tags.split(" ").map(function(tag){
      return (<a href={'/tags.html#'+ tag +'-ref'} className="label label-success">{ tag }</a>);
    });

    return (
      <li className="searchElement">
        <a href={this.props.url}>{this.props.title}</a>
        &nbsp;
        <a href={'/categories.html#' + this.props.category + '-ref'} className="label label-primary">
          { this.props.category }
        </a>
        {tags}
      </li>
    );
  } //END render
}); //END Post


var SearchPostList = React.createClass({
  render: function(){
    var searchR = this.props.data.slice(0, 10).map(function(post){
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