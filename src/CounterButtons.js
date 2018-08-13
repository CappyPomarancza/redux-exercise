import React from 'react'
import { add, sub, reset } from './store'
import { connect } from 'react-redux'


const mapDispatchToprops = (dispatch) => ({
    isaAdd: (number) => dispatch(add(number)),
    isaSub: (number) => dispatch(sub(number)),
    isaReset: (number) => dispatch(reset(number))
})

class CounterButtons extends React.Component {

    state = {
        inputValue: 0
    }

    handleChange = (event) => {
        this.setState({
            inputValue: parseInt(event.target.value)
        })
    }

    render() {
        return (
            <div>
                <input
                    type='number'
                    onChange={this.handleChange}
                />
                <button
                    onClick={() => this.props.isaAdd(this.state.inputValue)}
                >
                    +
                </button>
                <button
                    onClick={() => this.props.isaSub((this.state.inputValue))}
                >
                    -
                </button>
                <button
                    onClick={this.props.isaReset}
                >
                    RESET
                </button>

            </div>
        )
    }
}

export default connect(null, mapDispatchToprops)(CounterButtons)