
import { useState } from 'react'
import InputField from './Input'
import SubmitButton from './InputBotton';

function AppInput() {
const [input, setInput] = useState('')
   return (
    <>
        <InputField input={input} setInput={setInput} />
        <SubmitButton input={input} />
    </>
  )
}

export default AppInput