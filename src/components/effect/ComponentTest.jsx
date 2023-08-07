import { useEffect } from "react"

const ComponentTest = () => {

    useEffect(() => {
        console.log('i am mounted in comp test')
        return () => {
            console.log('i am unmounted in comp test')   
        };
    },[])
  return (
    <div>
        Comp test
    </div>
  )
}

export default ComponentTest
