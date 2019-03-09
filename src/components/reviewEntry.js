import React from "react";
import moment from "moment";
import axios from "axios";

const starStyle = {
  marginTop: '1em',
  height: '2em',
  gridColumn: '2'
}
const helpfulStyle = {
  gridColumn: '2',
  color: 'rgb(0, 70, 190)',
  fontSize: '13px',
}

const profileNameStyle = { 
  gridColumn: '1'
}

const headerStyle = {
  gridColumn: '2'
}

const dateStyle = {
  gridColumn: '2',
  fontFamily: 'Human BBY Web, Arial, Helvetica, sans-serif',
  fontSize: '11px',
}
const commentStyle = {
  gridColumn: '2',
  fontFamily: 'Human BBY Web, Arial, Helvetica, sans-serif',
  fontSize:'20px',
  fontWeight: '600',
}

const borderStyle = {
  gridColumn: '1 / 3',
  borderBottom: '1px solid rgb(197, 203, 213)',
}

class ReviewEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault();
    axios.post("/comments/helpful",
    {
      commentId: this.props.entry._id,
      helpful: this.props.entry.helpful + 1,
    }).then(res => this.props.update())
    this.setState({clicked: true})
  }

  render() {
    return (
      <>
        {/* <img style={profileStyle} src={'https://s3.us-east-2.amazonaws.com/reviews-hir-app/Profile+Pictures/baseprofile.jpeg'}></img> */}
        <h3 style={profileNameStyle}>{this.props.entry.user}</h3>
        <img style={starStyle} src={`https://s3.us-east-2.amazonaws.com/reviews-hir-app/Star+Rating/${this.props.entry.rating}.png`}/>
        <div style={commentStyle}>{this.props.entry.ratingComment}</div>
        <div style={dateStyle}>Posted {moment(this.props.entry.date).format('MMMM Do YYYY')}</div>
        <p style={headerStyle}>{this.props.entry.comment}</p>
        <h5 style={headerStyle}> {this.props.entry.helpful} people found this helpful</h5>
        <span onClick={this.handleClick} disabled={this.state.clicked} style={helpfulStyle}>Helpful({this.props.entry.helpful})</span>
        <div style={borderStyle}/>
      </>
    )
  }
}

export default ReviewEntry

