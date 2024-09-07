import ButtonToggle from './Button/Button'
import Box from './Button/Button_box'
import { useState } from 'react'
import './App.css'

function AppButton() {
    const [show, setShow] = useState(false)
  return (
    <>
        <ButtonToggle show={show} setShow={setShow} />
        {show && <Box />}
    </>
  )
}

export default AppButton
