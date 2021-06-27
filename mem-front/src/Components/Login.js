import React, {Component} from "react"
import {connect} from 'react-redux'
import addUser from '../actions/addUser'

class Login extends Component {
  
    handleSubmit(e){
    e.preventDefault()
    const name = e.target[0].value
    this.props.addUser(name)
    this.props.newUser(false, false)
    }

  render() {
    return (
        <>
            <div className="wrapper">
                <div className="login">
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <label>Name</label>
                            <input type="text"/>
                            <input type="submit" value="Create" />
                    </form>
                </div>
            </div>
      </>
    )
  }
}

export default connect(null, {addUser})(Login)
