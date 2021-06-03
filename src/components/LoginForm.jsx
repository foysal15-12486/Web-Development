import React, { useState } from 'react'
import axios from 'axios';

const LoginForm = () => {
    const  [username, setUsername] = useState('');
    const  [password, setPassword] = useState('');
    const  [error, setError] = useState('')

    async function handleSubmit(e){
        e.preventDefault();
        const authObject = {'Project-ID': '1c043fcb-462a-4e21-a31c-72eacdeeeaa7', 'User-Name': username, 'User-Secret': password}

        try {

             await axios.get('https://api.chatengine.io/chats', { headers: authObject });

             localStorage.setItem('username', username);
             localStorage.setItem('password', password);

            window.location.reload();
            setError('');

        }catch(error){
            setError('Something went wrong!. Please try again.')
        }
    }

    return(
        <div className='wrapper'>
            <div className="form">
               <h1 className="title">AREA 51</h1> 
               <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} className="input" placeholder="Username" required/>
                    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="input" placeholder="Password" required/>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
               </form>
            </div>
        </div>
    )
}

export default LoginForm;