import { useState } from "react"
import axios from 'axios'

const LoginPage = () => {

    const [name, setName] = useState('')
    const [passsword, setPassword] = useState('')

    const baseURL = 'http://localhost:8000'

    const submitHandler = (e) => {

        e.preventDefault()

        axios.post(`${baseURL}/register`, {
            userName: name,
            password: passsword
        }).then((response) => {
            console.error(response)
        });
    }

    return (
        <div>
            <form onSubmit={submitHandler} >
                <input type='text' name="username" value={name} onChange={(e) => setName(e.target.value)} />
                <input text='password' name="username" value={passsword} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginPage