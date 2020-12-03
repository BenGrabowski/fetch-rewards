import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <p>{this.props.name}</p>
        );
    }
}

export default Item;