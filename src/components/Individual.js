import React from "react";
// import { connect } from 'react-redux'

const Individual = (props) => (
    <div>
        <h2>{props.selectionOne}</h2>
        <p>{props.selectionTwo}</p>
    </div>
)

// const mapper = (data) => {
//     data.map((item) => {
//         return <p>{item}</p>
//     })
// }

// const mapStateToProps = (state) => {
//     return {
//         item: state
//     }
// }

export default Individual