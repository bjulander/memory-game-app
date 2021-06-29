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
            <h1>Welcome young padawan</h1>
            <h4>To get started, enter a unique identifier.</h4>
              <label>Padawan:</label>
                <input type="text" placeholder="Initials" size="5"/>
                <input type="submit" value="Save"/>
            </form>
          </div>
        </div>
      </>
    )
  }
}



export default connect(null, {addUser})(Login)
