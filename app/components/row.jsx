var Row = React.createClass({
  render: function() {
    var columns = this.props.row.get('grids').map(column => {
          return (
              <Cell active={column.get('active')}
                      onClick={this.props.onClick}
                      columnId={column.get('id')}
                      rowId={this.props.row.get('id')}/>
          );
        }).toArray();

        return (
          <div className='gridRow'>
            <div className='title grid' id={this.props.row.get('id')}>{this.props.row.get('title')}</div>
            {columns}
          </div>
        );
  }
});
