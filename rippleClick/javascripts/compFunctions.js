/** @jsx React.DOM */

var RippleInner = React.createClass({displayName: 'RippleInner',
  render: function(){
    if (this.props.cls) {
      this.props.cls += " ripple-button";
    }

    return (
      React.DOM.button({className: this.props.cls, onClick: this.props.ripple}, this.props.text)     
    )
  } // END render
});// END RippleButton

var RippleButton = React.createClass({displayName: 'RippleButton',
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
      React.DOM.div({className: "ripple-container"}, 
        RippleInner({text: "First", ripple: this.clickHandler, cls: "btn btn-primary"})
      )
    );
  }
});


var RippleApp = React.createClass({displayName: 'RippleApp',
  render: function(){
    return (
      React.DOM.div(null, 
        React.DOM.h1(null, "Ripple Click Effect"), 
        RippleButton(null)
      )
    );
  }
});// End RippleApp

React.renderComponent(RippleApp(null), document.getElementById('content'));