import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordForm from './PasswordForm'
import PasswordList from './PasswordList'
import './App.css'

// const App = () => <div>Hello World</div>
class App extends Component {
  state = {
    passwordsList: [],
    website: '',
    userName: '',
    password: '',
    toggle: true,
    searchInput: '',
  }

  passwordDetails = (website, userName, password) => {
    // this.setState({
    //   website,
    //   userName,
    //   password,
    // })
    // console.log({website, userName, password})
    const values = {
      id: uuidv4(),
      website,
      userName,
      password,
    }
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, values],
    }))
  }

  isToggle = () => {
    const {toggle} = this.state
    this.setState({
      toggle: !toggle,
    })
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  deleteUser = id => {
    const {passwordsList} = this.state
    const filteredList = passwordsList.filter(each => each.id !== id)
    this.setState({
      passwordsList: filteredList,
    })
  }

  render() {
    const {
      // website, userName, password, toggle,
      passwordsList,
      toggle,
      searchInput,
    } = this.state
    // const passDetails = {
    //   website,
    //   userName,
    //   password,
    //   toggle,
    // }
    const searchList = passwordsList.filter(eachItem =>
      eachItem.userName.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const {length} = searchList
    return (
      <div className="password-app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="password-logo"
        />
        <PasswordForm passwordDetails={this.passwordDetails} />
        <div className="lower-box">
          <h1>Your Passwords</h1>
          <p>{length}</p>
          <div>
            <div className="second-top-header">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
              />
              <input
                type="search"
                className="search-input"
                placeholder="search history"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
              <label htmlFor="checkbox">Show passwords</label>
              <input
                type="checkbox"
                id="checkbox"
                onClick={this.isToggle}
                alt="checkbox"
                readOnly
              />
            </div>
            <ul>
              {searchList.map(eachItem => (
                <PasswordList
                  key={eachItem.id}
                  passDetail={eachItem}
                  toggle={toggle}
                  deleteUser={this.deleteUser}
                />
              ))}
            </ul>
            <div>
              {searchList.length > 0 ? (
                ''
              ) : (
                <div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png "
                    alt="no passwords"
                    className="no-password-image"
                  />
                  <p>No Passwords</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
