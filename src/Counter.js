import React from 'react'
import { connect } from 'react-redux'


const mapStateToProps = (state) => ({
   value: state.counter.counterValue
})

class Counter extends React.Component {
 
    render(){
        return (
            <div>
                <h2>Hello in my JFDDL5 Counter</h2>
                <h1>{this.props.value}</h1>
                
            </div >
        )
    }
}
export default connect(mapStateToProps)(Counter)