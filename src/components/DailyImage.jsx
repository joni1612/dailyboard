import React, { Component } from "react";
import axios from "axios";
import ReactPlayer from "react-player";

class DailyImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: {},
    };
  }



  componentDidMount() {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=1hCYjjaKyBhRaQ90zt0IlmxD54UcuASaovNziYKd"
      )
      .then((res) => {
        console.log(res.data);
        this.setState({
          description: res.data,
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
          <div className="col-l-6">
            <figure className="figure ">
              {this.state.description.media_type === "video" ? (
                <ReactPlayer
                  url={this.state.description.url}
                  className="figure-img img-fluid rounded "
                  alt="A generic square placeholder image with rounded corners in a figure."
                />
              ) : (
                <img
                  src={this.state.description.url}
                  className="figure-img img-fluid rounded "
                  alt={this.state.description.title}
                />
              )}
              <figcaption class="figure-caption">
                {this.state.description.title}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    );
  }
}

export default DailyImage;
