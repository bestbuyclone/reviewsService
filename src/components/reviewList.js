import React from "react";
import ReviewEntry from "./reviewEntry";

const listStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 4fr'
}

class ReviewList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    if (this.props.comments) {
      return (
        <div style={listStyle}>
          {
            this.props.comments.map((entry, index) => {
              return <ReviewEntry entry={entry} key={index} update={this.props.update}/>
            })
          }
        </div>
      )
    } else return null;
  }
}

export default ReviewList;