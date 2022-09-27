import generateToken from './token';
import { useEffect } from 'react';
import { useState } from 'react';



function Local(){
    const [token, setToken] = useState('')
    useEffect(() => {
        localStorage.setItem('storedToken', token)
    })
    const handleClick = () => {
       setToken(generateToken())  
    }
    return (
        <div>
            <h1>Using LocalStorage in React</h1>
            <button onClick= {handleClick}>Generate New Token</button>
            <div>{token}</div>
        </div>
    )
}
export default Local;