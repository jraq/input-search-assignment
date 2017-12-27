import React, { Component } from 'react';
import './App.css';


class SearchInput extends Component {
    state = {
        matchingItems: [],
        isVisible: false
    }
    search = (e) => {
        const { items } = this.props;
        let matchedItems = [];
        let search = e.target.value.toLowerCase();

        if (search) {
            items.forEach(element => {

                if (element.label.toLowerCase().startsWith(search)) {
                    matchedItems.push({ ...element, isActive: false })
                }
            });
        }
        this.setState({ matchingItems: matchedItems, isVisible: search.length > 0 })
    }
    render() {
        const { isVisible, matchingItems } = this.state;
        return (
            <div className="Search">
                <input type="text" onKeyUp={this.search} />
                {isVisible && <div className="searchDisplay">
                    {
                        matchingItems.length === 0 && <div>
                            No results
                        </div>
                    }
                    {matchingItems.map((item, index) => {
                        return <div key={index}>{item.label} {item.value}</div>
                    })
                    }
                </div>
                }
            </div>
        );
    }
}

export default SearchInput;
