import React from "react";
import ReviewEntry from "./reviewEntry";

class ReviewList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      entries : [1,2,3,4],
    }
  }

  componentDidMount() {
    //search for entries on the db
  }

  render() {
    return (
      <React.Fragment>
        <h1>List of Reviews</h1>
        {
          this.state.entries.map(entry => {
            return <ReviewEntry entry={entry} />
          })
        }
      </React.Fragment>
    )
  }
}

export default ReviewList;