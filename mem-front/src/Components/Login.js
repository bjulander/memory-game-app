import React, {Component} from "react"
import {connect} from 'react-redux'
import addUser from '../actions/addUser'

class Login extends Component {

    constructor(props){
        super(props)
        this.state = {user: ""}
    }
  
    handleSubmit(e){
    e.preventDefault()
    const name = e.target[0].value
    this.props.addUser(name)
    this.setState({user: ""})
    this.props.newUser(false, false)
    // {name: this.state.name, id: Math.floor(Math.random() * Math.floor(100000000))}
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }


  render() {
    return (
        <>
            <div className="wrapper">
                <div className="login">
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <label>Name</label>
                            <input type="text" onChange={this.handleChange.bind(this)} value={this.state.name} name="user"/>
                            <input type="submit" value="Create" />
                    </form>
                </div>
            </div>
      </>
    )
  }
}

export default connect(null, {addUser})(Login)
