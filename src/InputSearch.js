import React, { Component } from 'react';
import './App.css';
import InputSearchItem from './InputSearchItem';

class SearchInput extends Component {
    state = {
        matchingItems: [],
        isVisible: false,
        searchText: ""
    }
    clickedItem = (item) => {
        const { searchResult } = this.props;
        searchResult(item);
        this.clearResults()
    }
    clearResults() {
        this.setState({ matchingItems: [], isVisible: false, searchText : "" })

    }
    change = (e) => {
        this.setState({ searchText: e.target.value });
    }
    keyUp = (e) => {
        const { items, searchResult } = this.props;
        if (e.keyCode === 13) {
            let item = this.state.matchingItems.find(x => x.selected === true);
            if (item) {
                searchResult(item);
                this.clearResults()
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
            this.setState({ matchingItems: matchedItems, isVisible: search.length > 0})
        }
    }
    keyDown = (e) => {
        const { matchingItems } = this.state;
        let isUpDown = e.keyCode === 38 || e.keyCode === 40
        if (isUpDown) {

            if (matchingItems.length > 0) {
                let selectedIndex = matchingItems.findIndex(x => x.selected === true);
                matchingItems.forEach((item, index) => {
                    let nextIndex = e.keyCode === 40 ? selectedIndex + 1 : selectedIndex - 1;
                    if (nextIndex === index) {
                        item.selected = true;
                    } else {
                        item.selected = false;
                    }
                });
                this.setState({ matchingItems: matchingItems })
            }
        }
    }
    render() {
        const { isVisible, matchingItems, searchText } = this.state;
        const { searchResult } = this.props;
        return (
            <div className="Search">
                <div className="SearchInput">
                    <input
                        value={searchText}
                        type="text"
                        onChange={this.change}
                        onKeyUp={this.keyUp}
                        onKeyDown={this.keyDown} />
                </div>
                {isVisible && <div className="SearchDisplay">
                    {
                        matchingItems.length === 0 && <div>
                            No results
                        </div>
                    }
                    {matchingItems.map((item, index) => {
                        return <InputSearchItem key={index} item={item} searchResult={this.clickedItem} />
                    })
                    }
                </div>
                }
            </div>
        );
    }
}

export default SearchInput;
