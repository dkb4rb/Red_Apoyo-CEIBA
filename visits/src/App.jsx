import useUpdatingClock from 'hooks/useUpdatingClock'
import Login from './pages/Login/Login'

export default function App() {
  const {hour, minutes, seconds, amPm} = useUpdatingClock()

  return (
    <div className="df flex-col vh-100">
      <header className="pv24 bg-gold black-80 tc">
        <h1 className="mt0 mb0">Red De Apoyo Internacional - CEIBA</h1>
        <div>Universidad De Antioquia</div>
      </header>
      <Login />
    </div>
  )
}
