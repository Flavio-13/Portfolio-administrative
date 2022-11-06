import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { MemberTeam } from './Pages/MemberTeam/MemberTeam';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="member-team" element={<MemberTeam />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
