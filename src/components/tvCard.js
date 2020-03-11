import React from "react";
import "./tvCard.css";

const urlTV = "https://group-back-end.herokuapp.com/tv";

class tvCard extends component {
  constructor(props) {
    super(props);

    this.state = {
      tvData: []
    };
  }

  componentDidMount() {
    fetch(urlTV)
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(tvData => {
        console.log(tvData);
        this.setState({ tvData: tvData });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    let tvShows = this.state.tvData.map(item => {
      return <div className="tvshows" key={item.id}></div>;
    });
  }
}
