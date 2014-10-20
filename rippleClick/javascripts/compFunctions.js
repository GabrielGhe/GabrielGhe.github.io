/** @jsx React.DOM */

var RippleInner = React.createClass({displayName: 'RippleInner',
  render: function(){
    if (this.props.cls) {
      this.props.cls += " ripple-button";
    }

    return (
      React.DOM.button({className: this.props.c, onClick: this.props.ripple}, this.props.t)     
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
        RippleInner({t: this.props.text, ripple: this.clickHandler, c: this.props.class})
      )
    );
  }
});


var RippleApp = React.createClass({displayName: 'RippleApp',
  render: function(){
    return (
      React.DOM.div(null, 
        React.DOM.h1(null, "Ripple Click Effect"), 
        RippleButton({text: "First", class: "btn btn-primary"}), 
        RippleButton({text: "Second", class: "btn btn-default"})
      )
    );
  }
});// End RippleApp

React.renderComponent(RippleApp(null), document.getElementById('content'));