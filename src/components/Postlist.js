

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectPost } from '../actions/postsAction';

class Postlist extends Component {


    createListItems() {


        return this.props.AllPosts.map((post) => {
            return (
                <li key={post.id}
                    onClick={() => this.props.selectPost(post)}
                    style={{
                        cursor: 'pointer'
                    }}>

                    <p> Title: {post.title} </p>
                    {/* <h2> {post.body} </h2> */}


                </li>
            );
        });

    };





    render() {



        if (!this.props.AllPosts) {
            return (
                <p>
                    {/* Click The Button First */}
                </p>
            );

        }

        return (
            <div>
                <ul>
                    {
                        this.createListItems()
                    }
                </ul>

            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        AllPosts: state.allposts
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        selectPost: selectPost
    }, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(Postlist);
