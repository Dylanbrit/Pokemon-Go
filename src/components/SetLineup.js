import React from "react";
import { setSelectionOne, setSelectionTwo } from '../actions/actions'
import { connect } from 'react-redux'
import { SelectionArea } from "./SelectionArea";

const SetLineup = (props) => (
    <div>
        <h1>working...</h1>
        <SelectionArea onSubmitOne={(data) => {
            props.dispatch(setSelectionOne(data))
        }} onSubmitTwo={(data) => {
            props.dispatch(setSelectionTwo(data))
        }} />
    </div>
)

const mapDispatchToProps = (dispatch) => {
    return {
        addData: (data) => dispatch(setSelectionOne(data))
    }
}

export default connect(mapDispatchToProps)(SetLineup)