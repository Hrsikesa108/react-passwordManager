import {Component} from 'react'
import './index.css'

export default class PasswordList extends Component {
  state = {
    passwords: [],
    count: 0,
  }

  //   componentDidMount(passDetails) {
  //     const {passwords} = this.state
  //     const {passDetails} = this.props
  //     this.setState({
  //       passwords: [...passwords, passDetails],
  //       count: passwords.length,
  //     })
  //     console.log('hello', passwords)
  //   }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(passDetails) {
    const {passwords} = this.state
    this.setState({
      passwords: [...passwords, passDetails],
      count: passwords.length,
    })
    console.log('hello', passwords)
  }

  render() {
    const {count, passwords} = this.state
    return (
      <div className="passwordList-card">
        <div className="pList-header">
          <div>
            <h1>Your Passwords</h1> <span>{count}</span>
          </div>
          <div>
            <input type="text" />
          </div>
        </div>
      </div>
    )
  }
}
// import './index.css'

// const ContactItem = props => {
//   const {contactDetails, toggleIsFavorite} = props
//   const {name, mobileNo, isFavorite, id} = contactDetails

//   const starImgUrl = isFavorite
//     ? 'https://assets.ccbp.in/frontend/react-js/star-filled-img.png'
//     : 'https://assets.ccbp.in/frontend/react-js/star-outline-img.png'

//   const onClickFavoriteIcon = () => {
//     toggleIsFavorite(id)
//   }

//   return (
//     <li className="table-row">
//       <div className="table-cell name-column">
//         <p>{name}</p>
//       </div>
//       <hr className="separator" />
//       <div className="table-cell mobile-no-column">
//         <p className="mobile-no-value">{mobileNo}</p>
//         <button
//           type="button"
//           className="favorite-icon-container"
//           onClick={onClickFavoriteIcon}
//         >
//           <img src={starImgUrl} className="favorite-icon" alt="star" />
//         </button>
//       </div>
//     </li>
//   )
// }

// export default ContactItem
