import React, { Component } from "react"

class TextCounter extends Component {

    state = {
        counter: 0
    }

    // handleSubmit(e){
    //     e.preventDefault()
    //     let word = e.target[0].value.length
    //     let prevState = this.state.counter
    //     this.setState({counter: prevState + word})
    //     // return {counter: {prevState + word}}
    // }

    handleSubmit(e){
        e.preventDefault()
        let word = e.target[0].value.length
        this.setState( (state) => {
        return {counter: state.counter + word}
        })
    }

    render(){
        const {counter} = this.state
        return (
        <>
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <input type="text"></input>
                <button>Click Me</button>
            </form >
            {counter}
        </>
        )
    }
}

export default TextCounter