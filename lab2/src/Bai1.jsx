import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [displayText, setDisplayText] = useState("");

  const handleClick = () => {
    setDisplayText(`Hello ${text}`);
  };

  return (
    <div className="container">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập nội dung..."
      />
      <button onClick={handleClick}>Click</button>
      <p>{displayText}</p>
    </div>
  );
}

export default App;