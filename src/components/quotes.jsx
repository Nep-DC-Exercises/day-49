import React, { Component } from "react";
import { loadData } from "../utils/loadData";

class Quote extends Component {
    state = {
        quote: "Fetching quotes..."
    };

    async componentDidMount() {
        this.getQuote();
    }

    getQuote = async () => {
        const data = await loadData("https://api.chucknorris.io/jokes/random?category=dev");
        const quote = data.value;

        this.setState({
            quote
        })
    };

    render() {
        const { quote } = this.state;
        return <p>{quote}</p>;
    }
}

export default Quote;
