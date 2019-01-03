import React from "react";

class ReviewEntry extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <h4>Individual Entry</h4>
        <h3>Picture id + Username</h3>
        <h3>Star Rating</h3>
        <h5>Post Date</h5>
        <p>All the stuff they have to say</p>
        <h6> __ people found this helpful</h6>
        <br/>
        <button>Helpful</button>
        <br/>
      </React.Fragment>
    )
  }
}

export default ReviewEntry

