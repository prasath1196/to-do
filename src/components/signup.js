import React , {Component} from 'react'
import {connect} from 'react-redux'
import * as userAction from '../actions/userActions'

class Signup extends Component {
    constructor(props){
      super(props)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChange = this.handleChange.bind(this)
      this.state = {"name":"","password":"","email":""}
    }
    handleSubmit(e) {
      e.preventDefault();
      let user = {
        name: this.state.name,
        email:this.state.email,
        password: this.state.password
      }
      this.props.createUser(user)
    }
    handleChange(e){
      let target = e.target
      this.setState({[target.name]:target.value})
    }
    render() {
      return (

      <form onSubmit = {this.handleSubmit}>
        <label>EmailAddress:</label>
        <input type="email" name="email" value={this.state.value} onChange = {this.handleChange}></input>
        <label>Password</label>
        <input type="password" name="password" value={this.state.value} onChange={this.handleChange}></input>
        <label> Name </label>
        <input type="text" name="name" value={this.state.value} onChange={this.handleChange}></input>
        <input type="submit"/>
      </form>
    );
}
}

const mapStatetoProps = (state, ownProps) => {
  return {
    response: state.response
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: user => dispatch(userAction.createUsers(user))
  }
}
export default connect(mapStatetoProps, mapDispatchToProps)(Signup)

