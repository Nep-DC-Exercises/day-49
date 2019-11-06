import React, { PureComponent } from "react";
import { loadData } from "../utils/loadData";
// import { loadData } from "../utils/loadData";

class DropDown extends PureComponent {
    
    state = {
        categories: []
    }

    async componentDidMount() {
        const response = await fetch(`https://api.chucknorris.io/jokes/categories`)
        const json = await response.json();
        this.setState({ categories: json });
      }

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
                    {this.state.categories.map(el=> (
                        <option>{el}</option>
                    ))}
                </select>
            </>
        );
    }
}

export default DropDown;
