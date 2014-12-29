/** @jsx React.DOM */

var searchList = [];

var SearchPost = React.createClass({
  render: function(){
    return (
      <li>
        Hi
      </li>
    );
  } //END render
}); //END Post


var SearchPostList = React.createClass({
  render: function(){
    var searchR = this.props.data.map(function(post){
      return <SearchPost title={post.title} url={post.id} />
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
    return (
      <div>
        <h3>Search Results</h3>
        <SearchPostList data={this.props.data} />
      </div>
    );
  }
});// End PersonApp

React.renderComponent(<SearchPostApp data={searchList} />,document.getElementById('searchResults'));