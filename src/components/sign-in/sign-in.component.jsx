import { render } from 'node-sass'
import React from 'react'
import './sign-in.styles.scss'

class SignIn extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:''
        }

        handleChange = (e) => {
                const {value, name} = e.target
                this.setState({ [name]:value})
        }

         handleSubmit = (e) => {
            e.preventDefault()
            this.setState({email:'', password:''})
        }
    }
    render() {
       return  <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
        <input type='email'
        name='email'
         value={this.state.email}
         onChange={}
          required />
        <label>Email</label>
        <input type='passwrod'
         name='password'
          value={this.state.password}
           required />
        <label>Password</label>
        <input type="submit" value="Submit"/>
        </form>
        </div>
    }
}
export default SignIn
