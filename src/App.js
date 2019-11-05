import React, { Component } from "react";
import Quote from "./components/quotes";
import "./App.css";

class App extends Component {
    state = {
        category: "dev"
    };

    changeCategory = () => {
        this.setState({
            category: "sport"
        });
    };

    // Move Change Category into it's own component and make it a drop down menu (<select> element )

    render() {
        const { category } = this.state;
        return (
            <div className="App">
                <Quote category={category} />
                <button onClick={() => this.changeCategory()}>
                    Change Category
                </button>
            </div>
        );
    }
}

export default App;
