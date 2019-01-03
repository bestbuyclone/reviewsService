import React from "React";

class TotalReviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <h1>
          Total Reviews Section
        </h1>
        <h4>
          ______ customer reviews
        </h4>
        <h4> Image + __ out of __ stars</h4>
        <br/>
        <span>
          Bar graph of ratings
        </span>
        <br/>
        <button>Write a customer review</button>
      </React.Fragment>
    )
  }
}

export default TotalReviews;