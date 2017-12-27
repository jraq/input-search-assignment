import React, { Component } from 'react';
import './App.css';
import InputSearchItem from './InputSearchItem';

class SearchInput extends Component {
    state = {
        matchingItems: [],
        isVisible: false
    }
    search = (e) => {
        const { items ,searchResult } = this.props;
        if(e.keyCode === 13){
            let item = this.state.matchingItems.find(x=>x.selected === true);
            if(item){
                searchResult(item);
            }
        }

        let isUpDownEnter = e.keyCode === 38 || e.keyCode === 40 || e.keyCode === 13;
        if (!isUpDownEnter) {
            let matchedItems = [];
            let search = e.target.value.toLowerCase();

            if (search) {
                items.forEach(element => {
                    if (element.label.toLowerCase().startsWith(search)) {
                        matchedItems.push({ ...element, isActive: false, selected: false })
                    }
                });
            }
            this.setState({ matchingItems: matchedItems, isVisible: search.length > 0 })
        }
    }
    selectItem = (e) => {
        const { matchingItems } = this.state;
        let isUpDown = e.keyCode === 38 || e.keyCode === 40
        if (isUpDown) {

            if (matchingItems.length > 0) {
                let selectedIndex = matchingItems.findIndex(x => x.selected === true);
                matchingItems.forEach((item, index) => {
                    let nextIndex = e.keyCode === 40 ? selectedIndex + 1 : selectedIndex - 1;
                    if (nextIndex === index) {
                        item.selected = true;
                    } else{
                        item.selected = false;
                    }
                });
                this.setState({ matchingItems: matchingItems })
            }
        }
    }
    render() {
        const { isVisible, matchingItems, } = this.state;
        const { searchResult } = this.props;
        return (
            <div className="Search">
                <div className="SearchInput">
                    <input type="text" onKeyUp={this.search} onKeyDown={this.selectItem} />
                </div>
                {isVisible && <div className="SearchDisplay">
                    {
                        matchingItems.length === 0 && <div>
                            No results
                        </div>
                    }
                    {matchingItems.map((item, index) => {
                        return <InputSearchItem key={index} item={item} searchResult={searchResult} />
                    })
                    }
                </div>
                }
            </div>
        );
    }
}

export default SearchInput;
