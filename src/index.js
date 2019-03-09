import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import TotalReviews from "./components/totalReviews"
import ReviewList from "./components/reviewList"

const headerStyle = {
  borderBottomColor: 'rgb(197, 203, 213)',
  borderBottomStyle: 'solid',
  borderBottomWidth: '1px',

}

const appStyle = {
  marginLeft: '13em'
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      productId: 1,
      product: {},
      comments: [],
    }
    this.updateProduct = this.updateProduct.bind(this);
  }

  updateProduct() {
    axios.get(`comments/${this.state.productId}`).then(comments => {
      this.setState({comments: comments.data})
    })
  }

  componentDidMount() {
    axios.get(`reviews/${this.state.productId}`)
    .then(response => {
      this.setState({product: response.data[0]})
    });
    axios.get(`comments/${this.state.productId}`).then(comments => {
      this.setState({comments: comments.data})
    })
  }

  render() {
    return (
      <div style={appStyle}>
        <TotalReviews product={this.state.product}/>
      <h2 style={headerStyle}> Most relevant reviews</h2>
        <ReviewList comments={this.state.comments} update={this.updateProduct}/>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('reviews'));
