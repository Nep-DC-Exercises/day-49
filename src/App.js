import React, { Component } from "react";
import Quote from "./components/quotes";
import Dropdown from "./components/categoryDropDown";
import { loadData } from "./utils/loadData";
import "./App.css";

class App extends Component {
    state = {
        category: "dev",
    };

    changeCategory = e => {
        const selectedCategory = e.target.value;
        this.setState({
            category: selectedCategory
        });
    };

    

    

    render() {
        const { category } = this.state;
        const { categories } = this.state; 

        return (
            <div className="App">
                <Quote category={category} />

                <Dropdown 
                  onClick={e => this.changeCategory(e)} 
                  categories={categories}
                />
            </div>
        );
    }
}

export default App;
