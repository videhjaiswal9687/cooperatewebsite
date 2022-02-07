import React, { Component } from 'react';
import { connect } from 'react-redux'
//The connect() function connects a React component to a Redux store.
import { buyCovaxin, buyCovishield } from './Action'

class Medical extends Component {
    render() {
        return <div>
            <h1>Medical Component</h1>
            <h1>Number Of Covaxin:{this.props.noOfCovaxin}</h1>
            <button onClick={this.props.getCovaxin}>BuyCovaxin</button>
            <h1>Number Of Covishield:{this.props.noOfCovishield}</h1>
            <button onClick={this.props.getCovishield}>BuyCovishield</button>
        </div>;
    }
}
//Single Reducer
// const mapStateToProps = state => {
//     return {
//         noOfCovaxin: state.noOfCovaxin,
//         noOfCovishield: state.noOfCovishield
//     }
// }
//Combine Reducer
const mapStateToProps = state => {
    return {
        noOfCovaxin: state.covaxin.noOfCovaxin,
        noOfCovishield: state.covishield.noOfCovishield
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCovaxin: () => dispatch(buyCovaxin()),
        getCovishield: () => dispatch(buyCovishield())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Medical)