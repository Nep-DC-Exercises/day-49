import React, { Component } from "react";
// import { loadData } from "../utils/loadData";

class DropDown extends Component {
    
    state = {
        category: null
    };
    
    
    render() {
        return (
            <>
                <label htmlFor="category-select">Choose a category:</label>

                <select
                    name="categories"
                    id="category-select"
                    onClick={this.props.onClick}
                >
                    <option value="">--Please choose an option--</option>
                    <option value="animal">Animal</option>
                    <option value="career">Career</option>
                    <option value="celebrity">Celebrity</option>
                    <option value="dev">dev</option>
                    <option value="explicit">explicit</option>
                </select>
            </>
        );
    }
}

export default DropDown;
