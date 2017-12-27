import React, { Component } from 'react';
import './App.css';


class SearchInput extends Component {
    state = {
        matchingItems: [],
        isVisible: false
    }
    search = (e) => {
        //TODO: build the search here
        console.log(e.target.value);
    }
    render() {
        const { isVisible, matchingItems} = this.state;
        return (
            <div className="Search">
                <input type="text" onKeyPress={this.search} />
                {isVisible && <div className="searchDisplay">
                    {
                        this.state.matchingItems.length === 0 && <div>
                            No results
                        </div>
                    }
                    {matchingItems.length > 0 && matchingItems.map((item) => {
                        return <div>{item.label} {item.value}</div>
                        })
                    }
                </div>
                }
            </div>
        );
    }
}

export default SearchInput;
