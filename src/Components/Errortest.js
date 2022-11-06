import React, { useState } from 'react'
function TestError() {
    const [testmessage, setTestmessage] = useState('')
    function ErrorBoundarytest(event){
     event.preventDefault(
        setTestmessage(event.target.value)
     )
    }
    function Firetest(){
        throw new Error('Sorry something went wrong')
    }
  return (
    <div>
      <input type='text' placeholder='fire' onChange={ErrorBoundarytest} value={testmessage} autoFocus/>
      {testmessage === 'Kaboom' ? <Firetest /> : ''}
    </div>
  )
}
export default TestError