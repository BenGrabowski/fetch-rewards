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
            <div>
                <h3>List {this.props.id}</h3>
                <ul>
                    {sortedItems.map(item => {
                        return <Item key={item.id} name={item.name} />
                    })}
                </ul>
            </div>            
        );
    }
}

export default List;