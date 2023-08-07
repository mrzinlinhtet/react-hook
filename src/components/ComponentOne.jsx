import { useState } from "react"
import "./One.css"
import ComponentTwo from "./ComponentTwo"

const ComponentOne = () => {
    const [toggle, setToggle] = useState(true)

    const handleClick = () => {
        setToggle((pre) => !pre)
    }

  return (
    <div>
      <h1 className={toggle ? "introText" : "changeTextColor"} onClick={handleClick}>Hello React</h1>
      {
        toggle && <ComponentTwo />
      }
      <button onClick={handleClick}>Toggle</button>
    </div>
  )
}

export default ComponentOne
