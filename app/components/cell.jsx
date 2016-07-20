import React from 'react';
var Cell = React.createClass({
    render: function() {
      var divStyle = null,
          classes = this.props.active? 'checked grid' : 'grid';

      if (this.props.columnId == 0) {
        divStyle =  {clear: 'right'};
      }

      return (
        <div style={divStyle}
          onClick={this.props.onClick.bind(null, this.props.rowId, this.props.columnId )}
          className={classes}
          id={this.props.columnId}>&nbsp;
        </div>
      );
    }
});
