/** @jsx React.DOM */

var RippleInner = React.createClass({
  render: function(){
    if (this.props.cls) {
      this.props.cls += " ripple-button";
    }

    return (
      <button className={this.props.cls} onClick={this.props.ripple}>{this.props.text}</button>     
    )
  } // END render
});// END RippleButton

var RippleButton = React.createClass({
  clickHandler: function(e) {
    var parent = $(this.getDOMNode());

    //create ripple if it doesnt exist
    if (parent.find('.ripple').length == 0) {
      parent.prepend('<span class="ripple"></span>');
    }

    var ripple = parent.find('.ripple');
    ripple.removeClass('animate');
    if (!ripple.height() && !ripple.width()) {
      var dim = Math.max(parent.outerHeight(), parent.outerWidth());
      ripple.css({
        height: dim,
        width: dim
      });
    }

    var x = e.pageX - parent.offset().left - ripple.width()/2;
    var y = e.pageY - parent.offset().top - ripple.height()/2;
    ripple
      .css({
        top: y + 'px',
        left: x + 'px'
      })
      .addClass('animate');
  }, //END clickHandler

  render: function() {
    return (
      <div className="ripple-container">
        <RippleInner text="First" ripple={this.clickHandler} cls="btn btn-primary" />    
      </div>
    );
  }
});


var RippleApp = React.createClass({
  render: function(){
    return (
      <div>
        <h1>Ripple Click Effect</h1>
        <RippleButton />
      </div>
    );
  }
});// End RippleApp

React.renderComponent(<RippleApp />, document.getElementById('content'));