import './App.css'
import { Outlet } from 'react-router-dom'
import { Navbar } from './Components/Navbar/Navbar';

function App() {
/*   document.title = 'Mouvance'; */
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
