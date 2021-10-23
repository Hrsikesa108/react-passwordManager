import {Component} from 'react'
import './index.css'

export default class PasswordForm extends Component {
  state = {
    website: '',
    userName: '',
    password: '',
  }

  changeHandler = event => {
    const {name} = event.target
    const {value} = event.target
    this.setState({[name]: value})
  }

  pData = event => {
    event.preventDefault()
    const {website, userName, password} = this.state
    const {passwordDetails} = this.props
    passwordDetails(website, userName, password)
  }

  render() {
    const {website, userName, password} = this.state
    return (
      <div className="password-card">
        <div className="p-card">
          <form>
            <h1 className="password-title">Add New Password</h1>

            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              alt="website"
            />
            <input
              type="text"
              placeholder="Enter Website"
              name="website"
              id="websiteDetails"
              className="form-control"
              value={website}
              onChange={this.changeHandler}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              alt="username"
            />
            <input
              type="text"
              placeholder="Enter Username"
              name="userName"
              id="userName"
              value={userName}
              className="form-control"
              onChange={this.changeHandler}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              alt="password"
            />
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              id="passWord"
              value={password}
              className="form-control"
              onChange={this.changeHandler}
            />
          </form>
          <button className="add-button" type="submit" onClick={this.pData}>
            Add
          </button>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-manager"
          />
        </div>
      </div>
    )
  }
}
