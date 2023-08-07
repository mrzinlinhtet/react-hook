import { useState } from 'react'
import { useEffect } from "react"
import ComponentTest from './ComponentTest'

const ComponentEffect = () => {

    const [count, setCount] = useState(0)
    const [toggle, setToggle] = useState(true)

    // mounted => ComponentsMounted
    useEffect(() => {
        // console.log("Mounted");
    },[])

    // didComponentUpdate => ComponentsUpdated
    useEffect(() => {
        // console.log("I am updated",count);
    })

    // components will update when value changed
    useEffect(() => {
        // console.log("Toggle changed");
    },[toggle])

    const handleClick = () => {
        setCount((pre) => pre + 1)
        // console.log(count);
    }

    const handleToggle = () => {
        setToggle(pre => !pre)
    }
  return (
    <div>
      <p>{count}</p>
      {/* {
        toggle && <p>Hello Reacttt</p>
      } */}
      {
        toggle && <ComponentTest />
      }
      <button onClick={handleClick}>Add</button>
      <button onClick={handleToggle}>Toggle</button>
    </div>
  )
}

export default ComponentEffect
