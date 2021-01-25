import React, { Component } from "react";
import axios from "axios";

class RandomQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://quotes.rest/qod")
      .then((res) => {
        this.setState({
          quote: res.data.contents.quotes[0],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container-fluid pt-4">
        <div className="row justify-content-md-center">
          <div className="col-md-6">
            <blockquote className="blockquote text-center">
              <i className="d-inline  fa fa-quote-left  text-success" />
              <p className="d-inline mb-0  font-italic lead">
                {this.state.quote.quote}
              </p>

              <footer className="blockquote-footer">
                {this.state.quote.author}
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    );
  }
}

export default RandomQuote;
