import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm'
import './App.css';

const App =()=>{
    if(!localStorage.getItem('username')) return <LoginForm />
    else
    return (
        <ChatEngine 
            height='100vh'
            projectID="1c043fcb-462a-4e21-a31c-72eacdeeeaa7"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps)=><ChatFeed {... chatAppProps}/>}
            
        />
    )
}
export default App;