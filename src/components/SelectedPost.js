
import React, { Component } from 'react'
import { connect } from 'react-redux'

class SelectedPost extends Component {

    render() {
        if (!this.props.selectedpost) {
            return (
                <h4>
                    {/* Select a post */}
                </h4>
            )
        }
        return (
            <div style={{
                marginLeft: 20
            }}>
                <h3>UserId  :{this.props.selectedpost.userId}</h3>
                <h3>Id      :{this.props.selectedpost.id}</h3>
                <h3>Title   :{this.props.selectedpost.title}</h3>
                <h3>Body    :{this.props.selectedpost.body}</h3>

            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        selectedpost: state.selectedPost
    }

};

export default connect(mapStateToProps)(SelectedPost);