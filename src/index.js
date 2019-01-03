import React from "react";
import ReactDOM from "react-dom";

import TotalReviews from "./components/totalReviews"
import ReviewList from "./components/reviewList"

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
          <div>
            Overall App
          </div>
          <br />
          <TotalReviews />
          <br />
          <ReviewList />
      </React.Fragment>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
