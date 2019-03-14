import React from "React";

const reviewStyle = {
}

const starStyle = {
  height: '1.4em',
}

const headerStyle ={
  color: 'rgb(4, 87, 200)',
  fontFamily:'Human BBY Web,Arial,Helvetica,sans-serif',
  fontSize: '13px',

}

const averageStars = obj => {
  const dict = {
    one:1,
    two:2,
    three:3,
    four:4,
    five:5,
  }
  let sumStars = 0;
  let sum = 0;
  for (let key in obj) {
    sum += (obj[key] * dict[key]);
    sumStars += obj[key];
  }
  return (sum / sumStars);
}

const sumReviews = obj => {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key]
  }
  return sum;
}
class TotalReviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.product) {
      return (
        <div style={reviewStyle}>
          <h2>
            Ratings & Reviews
          </h2>
          <h3>Customer Rating</h3>
          <h1>{(averageStars(this.props.product.stars)).toFixed(1)}</h1>
          <img style={starStyle} src={`https://s3.us-east-2.amazonaws.com/reviews-hir-app/Star+Rating/3.png`}></img>
          <div>({JSON.stringify(sumReviews(this.props.product.stars))} reviews)</div>
          <br/>
          <div style={headerStyle}>See all customers reviews | Write a review </div>
        </div>
      )
    } else return null;
  }
}

export default TotalReviews;