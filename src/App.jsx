import { Routes, Route } from 'react-router-dom';
// import './App.css'
import './index.css'

import Chat from './chat/chat.friend.jsx'
function App() {
  
  return (
    <>
      <Routes>
        <Route path="/chat" element={<Chat/>}/>
      </Routes>
    </>
  )
}

export default App
