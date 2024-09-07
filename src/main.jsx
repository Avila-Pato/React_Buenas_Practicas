import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppInput from './Input/AppInput.jsx'
import UserList from './FetchApi/HookCall';
import AppButton from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AppButton /> */}
    {/* <AppInput /> */}
    <UserList />
  </StrictMode>,
)
