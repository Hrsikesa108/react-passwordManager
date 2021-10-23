import './index.css'

const PasswordList = props => {
  //   const {passDetails, isToggle, } = props
  //   const {website, userName, password, toggle} = passDetails
  const {passDetail, toggle, deleteUser} = props
  const {website, userName, password, id} = passDetail
  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="password-list">
      <div>
        <p>{website}</p>
        <p>{userName}</p>
        {toggle ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
          />
        ) : (
          <p type="text">
            {password}
            {/* <input id="password" value={password} type="text" readOnly /> */}
          </p>
        )}

        <button
          className="delete-button"
          testid="delete"
          type="button"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordList
