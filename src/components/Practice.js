import React from "react"
import { connect } from 'react-redux'

const Practice = (props) => (
    <div>
        <h1>Practice</h1>
        {props.selectionOne}
        {props.selectionOneTypeOne}
    </div>
)

// here is where i check to make sure the state was updated

const mapStateToProps = (state) => {
    return {
        selectionOne: state.selectionOne,
        selectionOneTypeOne: state.selectionOneTypeOne
    }
}

export default connect((mapStateToProps))(Practice)