import logo from './logo.svg';
import './App.css';
import { Jutsu } from 'react-jutsu'
import { useState } from 'react';

function App() {
  const [room, setRoom] = useState('')
  const [name, setName] = useState('')
  const [call, setCall] = useState(false)
  const [password, setPassword] = useState('')

  const handleClick = event => {
    event.preventDefault()
    if (room && name) setCall(true)
  }

  return call ? (

    <div>
      <Jutsu
        roomName={room}
        displayName={name}
        containerStyles={{ width: '100vw', height: '100vh' }}
        password={password}
        onMeetingEnd={() => console.log('Meeting has ended')}
        loadingComponent={<p>loading ...</p>}
        errorComponent={<p>Oops, something went wrong</p>} />
    </div>
  ) : (
    <form>
      <input id='room' type='text' placeholder='Room' value={room} onChange={(e) => setRoom(e.target.value)} />
      <input id='name' type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
      <input id='password' type='text' placeholder='Password (optional)' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleClick} type='submit'>
        Start / Join
      </button>
    </form>
  )
}

export default App;
