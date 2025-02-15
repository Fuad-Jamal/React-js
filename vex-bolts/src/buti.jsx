import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'


let Buti = () => {
    const [data, setData] = useState()
    
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users/').then((res) => {
        setData(res.data[9].name)
    },[]) 
    })

  return (
    <div>
        <input placeholder='username'/>
        <button>Bwitton</button>

    </div>
  )
}


export default Buti;