import { useRef,useState } from "react";
import Counter from "./Counter";

const Input = () => {
//   const inputRef = useRef();
  const [text, setText] = useState("")

  const handleClick = () => {
    // console.log(inputRef.current.value);
    // console.log(text);
  };

  const handleChange = (e) => {
    setText(e.target.value)
    console.log(e.target.value);
  };
  // console.log('render');
  return (
    <div>
      <input value={text} onChange={handleChange} type="text" />
      <button onClick={handleClick}>Click</button>
      <Counter data={text} />
    </div>
  );
};

export default Input;
