import React, { Component } from 'react';
import './App.css';

class InputSearchItem extends Component {
    click = (e) =>{
        const {item, searchResult} = this.props;
        searchResult(item);
    }
    render(){
        const { item } = this.props;
        return(<div className={item.selected ? "SearchDisplayItemActive" : "SearchDisplayItem"} onClick={this.click}>{item.label} {item.value}</div>)
    }
}

export default InputSearchItem;