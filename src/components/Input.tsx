import { useState } from "react";

const Input = ({ setMessage }: any) => {
  const [text, setText] = useState("");
  const handlerMessage = () => {
    setMessage(text);
  };

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={handlerMessage}>Send</button>
    </div>
  );
};

export default Input;
