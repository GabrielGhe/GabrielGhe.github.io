/** @jsx React.DOM */

var SearchPost = React.createClass({
  render: function(){
    var tags = this.props.tags.split(" ").map(function(tag){
      return (<a href={'/tags.html#'+ tag +'-ref'} className="label label-success">{ tag }</a>);
    });

    return (
      <li>
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
    });// End People

    return (
      <div>
        {searchR}
      </div>
    );
  }
});// End PersonList


var SearchPostApp = React.createClass({
  render: function(){
    var header = "";
    if (this.props.data.length > 0) {
      header = <h3>Search Results</h3>;
    }

    return (
      <div>
        {header}
        <SearchPostList data={this.props.data} />
      </div>
    );
  }
});// End PersonApp