/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-alert */
import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const handleSubmit = e => {
    e.preventDefault()
    const dummyUsername = 'Deepa'
    const dummyPassword = 'Deep@1017'
    if (username === dummyUsername && password === dummyPassword) {
      history.push('/home')
    } else {
      alert('Invalid Username or Password')
    }
  }

  return (
    <div className="container m-3">
      <div className="column bg-card ">
        <div className="cred-card col-3 d-flex flex-column bg-light p-3 mb-3">
          <h1 className="dummy-head">Dummy credentials</h1>
          <p className="credentials">Username: Deepa</p>
          <p className="credentials">Password: Deep@1017</p>
        </div>
        <div className="login-card col-md-4 col-lg-6 d-flex flex-column shadow bg-light p-3">
          <h1 className="login">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3 text-center">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
