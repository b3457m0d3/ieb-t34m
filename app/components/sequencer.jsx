var Sequencer = React.createClass({
    render: function() {

      var rows = this.props.grid.map(row => {
        return (
          <Row row={row} onClick={this.props.onClick} />
        );
      }).toArray();

      return (
          <div className="sequencer">
              {rows}
          </div>
      );
    }
});
