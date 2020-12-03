import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <li className="list-group-item list-group-item-action">{this.props.name}</li>
        );
    }
}

export default Item;