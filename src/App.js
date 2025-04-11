import Background from "./Components/Background"
import Form from "./Components/Form"
import logo from './Assets/images/logo-full.svg'
import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Ticket from "./Components/Ticket"

const App = () => {
  const [avatarImage, setAvatarImage] = useState(null);
  const [githubUsername, setGithubUsername] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div>
      <Background />
      
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <Routes>
        <Route path="/conference-ticket-generator/" element={<Form setAvatarImage={setAvatarImage} setGithubUsername={setGithubUsername} setUsername={setUsername} setEmail={setEmail} />} />
        <Route path="/conference-ticket-generator/ticket" element={<Ticket avatarImage={avatarImage} githubUsername={githubUsername} username={username} email={email} />} />
      </Routes>
      
    </div>
  )
}

export default App