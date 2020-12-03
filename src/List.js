import React, { Component } from 'react';
import Item from './Item';

class List extends Component {        
    render() {     
        function compareValues(a, b) {
            let comparison = 0;
            if(a.name > b.name) {
                comparison = 1;
            } else if (a.name < b.name) {
                comparison = -1;
            }
            return comparison;
        }
        
        const sortedItems = this.props.items.sort(compareValues);        

        return (
            <div className="col-sm-3">
                <h3 className="d-flex justify-content-center">List {this.props.id}</h3>
                <ul className="list-group">
                    {sortedItems.map(item => {
                        return <Item key={item.id} name={item.name} />
                    })}
                </ul>
            </div>            
        );
    }
}

export default List;