
import {forwardRef,useState,useImperativeHandle} from 'react'
import React from 'react'

const Student = forwardRef((props,ref) => {
  const [toggle,setToggle] = useState(false)
  useImperativeHandle(ref,()=>({
    alterToggle(){
      setToggle(!toggle)
    }
  }))

  return (
    <div>

       {toggle && <span>Bambi</span>}
    </div>
  )
})

export default Student;
