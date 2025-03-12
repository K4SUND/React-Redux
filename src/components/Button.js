
import React, { Component } from 'react';
import { fetchApiPosts, fetchPosts } from '../actions/postsAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Button extends Component {
  render() {
    return (
      <div style={{
        marginLeft: 20
      }}>
        <button
          onClick={
            () => {
              this.props.fetchAllPostsAPI();
            }

          }>Click Me To Show Posts From Store</button>

      </div>
    )
  }
};


// connect

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    // fetchAllPosts: fetchPosts,
    fetchAllPostsAPI: fetchApiPosts
  }, dispatch);
};

export default connect(null, matchDispatchToProps)(Button);